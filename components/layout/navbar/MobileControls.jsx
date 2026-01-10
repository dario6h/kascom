import HamburgerButton from './HamburgerButton';
import MobileLanguageToggle from './MobileLanguageToggle';

export default function MobileControls({ isMenuOpen, onMenuToggle, onLanguageToggle }) {
  return (
    <div className="lg:hidden flex items-center gap-4">
      <MobileLanguageToggle onClick={onLanguageToggle} />
      <HamburgerButton isOpen={isMenuOpen} onClick={onMenuToggle} />
    </div>
  );
}
