import NavbarLink from './NavbarLink';
import LanguageToggle from './LanguageToggle';

export default function DesktopMenu({ menuItems, isActive, onLanguageToggle }) {
  return (
    <div className="hidden lg:flex items-center gap-8">
      {menuItems.map((item) => (
        <NavbarLink
          key={item.name}
          href={item.href}
          isActive={isActive(item.href)}
        >
          {item.name}
        </NavbarLink>
      ))}
      <LanguageToggle onClick={onLanguageToggle} />
    </div>
  );
}
