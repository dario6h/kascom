'use client';

import { useState } from 'react';

export default function ClientLogo({ name, logoBase, className, style }) {
  const [imgSrc, setImgSrc] = useState(`/images/about/clients/${logoBase}.png`);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    // If PNG fails and we haven't already tried JPG, try JPG
    if (!hasError && imgSrc.endsWith('.png')) {
      setHasError(true);
      setImgSrc(`/images/about/clients/${logoBase}.jpg`);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={name}
      className={className}
      style={style}
      loading="lazy"
      onError={handleError}
    />
  );
}
