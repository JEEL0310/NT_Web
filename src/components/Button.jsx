import { Link } from "react-router-dom";
import clsx from "clsx";

export default function Button({ to, href, variant = "primary", chamfer = false, className, style, children, ...rest }) {
  const chamferStyle = chamfer
    ? {
        clipPath:
          "polygon(4px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 14px 100%, 0 calc(100% - 14px), 0 4px)",
        boxShadow:
          variant === "ghost"
            ? "inset 0 0 0 1px rgba(3, 21, 74, 0.12)"
            : "inset 0 0 0 1px rgba(255, 255, 255, 0.22)",
        filter:
          variant === "ghost"
            ? "drop-shadow(0 4px 12px rgba(3, 21, 74, 0.06))"
            : "drop-shadow(0 8px 20px rgba(20, 86, 216, 0.32))",
        ...style,
      }
    : style;

  const cls = clsx(
    "btn",
    variant === "primary" ? "btn-primary" : "btn-ghost",
    chamfer && "!rounded-none",
    className
  );

  if (to) return <Link to={to} className={cls} style={chamferStyle} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={cls} style={chamferStyle} {...rest}>{children}</a>;
  return <button className={cls} style={chamferStyle} {...rest}>{children}</button>;
}
