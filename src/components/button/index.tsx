import React from "react";

interface PillButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "primary" | "secondary" | "dark" | "basic" | "aiButton" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  style?: React.CSSProperties;
}

const PillButton: React.FC<PillButtonProps> = ({
  onClick,
  children,
  className = "",
  disabled = false,
  type = "button",
  variant = "dark",
  size = "md",
  style,
}) => {
  // Define variant styles
  const variantStyles = {
    primary:
      "rounded-full border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white dark:border-gray-200 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-black",
    secondary:
      "rounded-full border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-black",
    dark: "rounded-full bg-gray-800 truncate border-gray-800 text-white hover:shadow-lg hover:text-gray-300 dark:bg-gray-900 dark:border-gray-900 dark:text-gray-300 dark:hover:text-white",
    basic: "rounded-full text-gray-800 hover:shadow-lg hover:text-gray-600 dark:text-white dark:hover:text-gray-300",
    aiButton:
      "rounded-full border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white dark:border-gray-200 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-black",
    danger:
      "rounded-full border-red-500 text-white bg-red-500 hover:bg-red-700 hover:text-white dark:border-red-400 dark:text-white dark:hover:bg-red-600 dark:hover:text-white",
  };

  // Define size styles
  const sizeStyles = {
    sm: "p-1 px-4 text-sm",
    md: "p-2 px-5 text-base",
    lg: "p-4 px-6 text-base",
    xl: "p-6 px-8 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={`border transition duration-300 ease-in-out
        ${variantStyles[variant]} ${sizeStyles[size]} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}`}
    >
      {children}
    </button>
  );
};

export default PillButton; // Ensure this is a default export
