import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

const IconRenderer = ({
  iconName,
  className = "w-5 h-5 text-gray-700",
}: {
  iconName?: string;
  className?: string;
}) => {
  const LucideIcon = LucideIcons[
    iconName as keyof typeof LucideIcons
  ] as LucideIcon;

  if (!LucideIcon) {
    return <LucideIcons.Sparkles className={className} />;
  }

  return <LucideIcon className={className} />;
};


export default IconRenderer;