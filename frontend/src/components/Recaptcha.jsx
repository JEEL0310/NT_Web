import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";

const DEFAULT_SITE_KEY =
  import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

/**
 * Clean React Google reCAPTCHA v2 Component
 */
const Recaptcha = forwardRef(function Recaptcha(
  {
    siteKey = DEFAULT_SITE_KEY,
    onChange,
    onExpired,
    onError,
    theme = "light",
    size = "normal",
    className = "",
  },
  ref
) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (
        widgetIdRef.current !== null &&
        window.grecaptcha &&
        typeof window.grecaptcha.reset === "function"
      ) {
        try {
          window.grecaptcha.reset(widgetIdRef.current);
        } catch (e) {
          console.warn("reCAPTCHA reset warning:", e);
        }
      }
    },
    getResponse: () => {
      if (
        widgetIdRef.current !== null &&
        window.grecaptcha &&
        typeof window.grecaptcha.getResponse === "function"
      ) {
        return window.grecaptcha.getResponse(widgetIdRef.current);
      }
      return "";
    },
  }));

  useEffect(() => {
    let interval = null;
    let isMounted = true;

    const tryRender = () => {
      if (!isMounted || !containerRef.current) return;

      if (
        window.grecaptcha &&
        window.grecaptcha.render &&
        typeof window.grecaptcha.render === "function"
      ) {
        // Only render if container is empty
        if (widgetIdRef.current === null && containerRef.current.innerHTML === "") {
          try {
            widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
              sitekey: siteKey,
              theme,
              size,
              callback: (token) => {
                if (onChange) onChange(token);
              },
              "expired-callback": () => {
                if (onExpired) onExpired();
              },
              "error-callback": () => {
                if (onError) onError();
              },
            });
          } catch (err) {
            console.error("reCAPTCHA render error:", err);
          }
        }
        if (interval) clearInterval(interval);
      }
    };

    tryRender();

    if (widgetIdRef.current === null) {
      interval = setInterval(tryRender, 200);
    }

    return () => {
      isMounted = false;
      if (interval) clearInterval(interval);
    };
  }, [siteKey, theme, size, onChange, onExpired, onError]);

  return (
    <div className={`recaptcha-wrapper overflow-x-auto py-1 ${className}`}>
      <div ref={containerRef} />
    </div>
  );
});

export default Recaptcha;
