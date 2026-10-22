import {
  Zap,
  Code2,
  Shield,
  ShieldCheck,
  Cloud,
  Factory,
  HeartPulse,
  Trophy,
  Building2,
  Rocket,
  Layers,
  Activity,
  GraduationCap,
  Utensils,
  Hotel,
  Building,
} from "lucide-react";

const map = {
  Zap,
  Code2,
  Shield,
  ShieldCheck,
  Cloud,
  Factory,
  HeartPulse,
  Trophy,
  Building2,
  Rocket,
  Layers,
  Activity,
  GraduationCap,
  Utensils,
  Hotel,
  Building,
};

/** Resolves an icon by the string name stored in /data. */
export default function Icon({ name, size = 24, className }) {
  const C = map[name] || Layers;
  return <C size={size} className={className} strokeWidth={1.8} />;
}
