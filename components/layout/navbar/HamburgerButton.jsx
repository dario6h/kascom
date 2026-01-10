export default function HamburgerButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col gap-1.5 p-2 transition-all group text-white"
      aria-label="Toggle mobile menu"
    >
      <span
        className={`w-6 h-0.5 bg-current transition-all duration-300 ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-current transition-all duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-current transition-all duration-300 ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      />
    </button>
  );
}
