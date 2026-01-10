import Link from 'next/link';

export default function NavbarLink({ href, isActive, children }) {
  return (
    <Link
      href={href}
      className="relative px-4 py-2 font-medium text-white transition-all group"
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
        style={{ backgroundColor: '#f5a623' }}
      />
    </Link>
  );
}
