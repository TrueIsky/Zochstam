'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { proxyImage } from '@/app/actions/imageProxy';

interface ProxiedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function ProxiedImage({
  src,
  alt,
  width = 96,
  height = 96,
  className = '',
  priority = false,
}: ProxiedImageProps) {
  const [imageData, setImageData] = useState<{
    dataUrl: string | null;
    error?: string;
  }>({ dataUrl: null });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!src) return;

    setIsLoading(true);
    proxyImage(src)
      .then(result => {
        setImageData(result);
        setIsLoading(false);
      })
      .catch(error => {
        setImageData({ dataUrl: null, error: error.message });
        setIsLoading(false);
      });
  }, [src]);

  // Loading state
  if (isLoading) {
    return (
      <div 
        className={`animate-pulse bg-gray-200 rounded-full ${className}`}
        style={{ width, height }}
      />
    );
  }

  // Error state
  if (imageData.error || !imageData.dataUrl) {
    return (
      <div 
        className={`bg-gray-200 rounded-full flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">!</span>
      </div>
    );
  }

  // Success state
  return (
    <Image
      src={imageData.dataUrl}
      alt={alt}
      width={width}
      height={height}
      className={`rounded-full object-cover ${className}`}
      priority={priority}
    />
  );
} 