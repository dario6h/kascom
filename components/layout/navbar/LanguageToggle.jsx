export default function LanguageToggle({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative px-4 py-2 font-medium text-white transition-all group"
      aria-label="Toggle language"
    >
      ع
      <span
        className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
        style={{ backgroundColor: '#f5a623' }}
      />
    </button>
  );
}
