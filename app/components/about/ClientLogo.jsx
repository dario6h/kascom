'use client';

export default function ClientLogo({ name, logoBase, className, style }) {
  return (
    <img
      src={`/images/about/clients/${logoBase}.png`}
      alt={name}
      className={className}
      style={style}
      loading="lazy"
    />
  );
}
