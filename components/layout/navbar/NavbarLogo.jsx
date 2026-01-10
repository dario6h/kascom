import Link from 'next/link';

export default function NavbarLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-bar rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">K</span>
      </div>
      <span className="text-xl font-bold gradient-text">KASCOOM</span>
    </Link>
  );
}
