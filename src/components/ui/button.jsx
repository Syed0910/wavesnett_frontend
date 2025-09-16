import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

// Tooltip Component (unchanged)
const Tooltip = ({ children, content, position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);
  if (!content) return children;

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  const arrowClasses = {
    top: "top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900",
    bottom: "bottom-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900",
    left: "left-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900",
    right: "right-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute ${positionClasses[position]} px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap z-50 opacity-100 transition-opacity`}
        >
          {content}
          <div className={`absolute ${arrowClasses[position]} w-0 h-0`}></div>
        </div>
      )}
    </div>
  );
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  onClick,
  type = "button",
  className = "",
  icon = null,
  tooltip = "",
  tooltipPosition = "top",
  changeThemeOnClick = false,
  themeColor = null,
  ...props
}) => {
  const { primaryColor, setPrimaryColor } = useTheme();
  const [hovered, setHovered] = useState(false);

  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[var(--primary)] text-white focus:ring-[var(--primary)]",
    secondary: "bg-gray-200 text-gray-900 focus:ring-gray-500",
    success: "bg-green-600 text-white focus:ring-green-500",
    danger: "bg-red-600 text-white focus:ring-red-500",
    info: "bg-[var(--primary)]/80 text-white focus:ring-[var(--primary)]",
    outline: "border border-gray-300 bg-white text-gray-700 focus:ring-gray-500",
    ghost: "text-gray-700 focus:ring-gray-500",
    link: "text-[var(--primary)] focus:ring-[var(--primary)]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    xl: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const handleClick = (e) => {
    if (changeThemeOnClick && themeColor) setPrimaryColor(themeColor);
    if (onClick) onClick(e);
  };

  const button = (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={classes}
      style={{
        "--primary": primaryColor,
        color: hovered && variant === "link" ? primaryColor : undefined,
        backgroundColor: hovered && variant === "primary" ? primaryColor : undefined,
      }}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {icon && !loading && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );

  if (tooltip) {
    return (
      <Tooltip content={tooltip} position={tooltipPosition}>
        {button}
      </Tooltip>
    );
  }

  return button;
};

// Export variants
export const PrimaryButton = (props) => <Button variant="primary" {...props} />;
export const SecondaryButton = (props) => <Button variant="secondary" {...props} />;
export const SuccessButton = (props) => <Button variant="success" {...props} />;
export const DangerButton = (props) => <Button variant="danger" {...props} />;
export const OutlineButton = (props) => <Button variant="outline" {...props} />;
export const InfoButton = (props) => <Button variant="info" {...props} />;

export default Button;
