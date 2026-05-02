import {
  ArrowRight,
  Banknote,
  Camera,
  CheckCircle2,
  CheckSquare,
  ChevronDown,
  Clapperboard,
  Eye,
  EyeOff,
  Flame,
  Globe,
  KeyRound,
  Landmark,
  Lock,
  LogIn,
  Mail,
  PlayCircle,
  QrCode,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Star,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Zap,
  type LucideProps,
} from "lucide-react";

const iconMap = {
  "arrow-right": ArrowRight,
  banknote: Banknote,
  camera: Camera,
  "check-circle-2": CheckCircle2,
  "check-square": CheckSquare,
  "chevron-down": ChevronDown,
  clapperboard: Clapperboard,
  eye: Eye,
  "eye-off": EyeOff,
  flame: Flame,
  globe: Globe,
  "key-round": KeyRound,
  landmark: Landmark,
  lock: Lock,
  "log-in": LogIn,
  mail: Mail,
  "play-circle": PlayCircle,
  "qr-code": QrCode,
  rocket: Rocket,
  "shield-check": ShieldCheck,
  "shopping-cart": ShoppingCart,
  star: Star,
  target: Target,
  "trending-up": TrendingUp,
  users: Users,
  wallet: Wallet,
  zap: Zap,
} as const;

export type LucideIconName = keyof typeof iconMap;

type LucideIconProps = Omit<LucideProps, "ref"> & {
  name: LucideIconName;
};

export default function LucideIcon({
  name,
  className = "",
  strokeWidth = 2.75,
  ...props
}: LucideIconProps) {
  const Icon = iconMap[name];
  const classes = ["lucide-icon", "text-2xl", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Icon
      aria-hidden="true"
      className={classes}
      focusable="false"
      size="1em"
      strokeWidth={strokeWidth}
      {...props}
    />
  );
}
