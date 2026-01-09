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
  rel,
  style: customStyle
}) {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent";

  const variants = {
    primary: "border-2 border-white/60 text-white hover:brightness-110 hover:border-white/80 focus:ring-blue-700 shadow-sm hover:shadow-md",
    secondary: "bg-slate-700 text-white hover:bg-slate-600 focus:ring-slate-500 shadow-sm hover:shadow-md",
    outline: "border-2 border-slate-400 text-slate-300 hover:border-slate-300 hover:text-white hover:bg-slate-700/30 focus:ring-slate-400"
  };

  const sizes = {
    small: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  const defaultStyle = variant === 'primary' ? { backgroundColor: '#0a1628' } : undefined;
  const style = { ...defaultStyle, ...customStyle };

  if (href) {
    return (
      <Link href={href} className={classes} style={style} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={style}>
      {children}
    </button>
  );
}