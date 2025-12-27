export default function Card({ 
  children, 
  className = "",
  hover = true,
  padding = "default"
}) {
  const paddingClasses = {
    none: '',
    small: 'p-4',
    default: 'p-6',
    large: 'p-8'
  };

  return (
    <div 
      className={`
        bg-white rounded-xl border border-gray-200 
        ${hover ? 'hover:shadow-lg transition-shadow duration-300' : ''}
        ${paddingClasses[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}