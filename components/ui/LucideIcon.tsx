import {
  ArrowRight,
  Banknote,
  ChevronDown,
  Globe,
  Landmark,
  QrCode,
  Rocket,
  ShoppingCart,
  Star,
  TrendingUp,
  Users,
  Wallet,
  type LucideProps,
} from "lucide-react";

const iconMap = {
  "arrow-right": ArrowRight,
  banknote: Banknote,
  "chevron-down": ChevronDown,
  globe: Globe,
  landmark: Landmark,
  "qr-code": QrCode,
  rocket: Rocket,
  "shopping-cart": ShoppingCart,
  star: Star,
  "trending-up": TrendingUp,
  users: Users,
  wallet: Wallet,
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
