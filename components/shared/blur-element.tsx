import React from "react";
import { cn } from "@/lib/utils";

interface BlurElementProps {
  position?: "left" | "top" | "right" | "bottom" | "inset";
  positionValue?: string;
  zIndex?: number;
  size?: string;
  blur?: string;
  className?: string;
}

export const BlurElement = ({
  position = "inset",
  positionValue = "0",
  zIndex = 0,
  size = "100px",
  blur = "40px",
  className,
}: BlurElementProps) => {
  // Define position classes based on the position prop
  const positionClasses = {
    left: `left-[${positionValue}]`,
    top: `top-[${positionValue}]`,
    right: `right-[${positionValue}]`,
    bottom: `bottom-[${positionValue}]`,
    inset: "inset-0",
  };

  // Custom gradient background style
  const gradientStyle = {
    opacity: 0.5,
    background: "linear-gradient(180deg, var(--blur-gradient-start) 0%, var(--blur-gradient-end) 100%)",
    filter: `blur(${blur})`,
    width: size,
    height: size,
    zIndex: zIndex,
  };

  return (
    <div
      className={cn(
        "absolute aspect-square rounded-full",
        position === "inset" ? positionClasses.inset : positionClasses[position],
        className
      )}
      style={gradientStyle}
    />
  );
};

export default BlurElement;
