import Link from 'next/link';

export default function Button({ 
  children, 
  href,
  variant = "primary",
  size = "default",
  className = "",
  onClick,
  type = "button",
  target,
  rel
}) {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300";

  const variants = {
    primary: "bg-gradient-bar text-white hover:shadow-lg hover:shadow-accent-orange/30 hover:scale-105",
    secondary: "bg-primary-700 text-white hover:bg-primary-600",
    outline: "border-2 border-accent-orange text-accent-orange hover:bg-gradient-bar hover:text-white hover:border-transparent"
  };

  const sizes = {
    small: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}