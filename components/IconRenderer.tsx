import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

const IconRenderer = ({ iconName }: { iconName: string }) => {
  const LucideIcon = LucideIcons[
    iconName as keyof typeof LucideIcons
  ] as LucideIcon;

  if (!LucideIcon) {
    return <span>⚠️ Invalid icon</span>;
  }

  return <LucideIcon className="w-5 h-5 text-gray-700" />;
};


export default IconRenderer;