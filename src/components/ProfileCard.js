import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable modern circular avatar with gradient ring (no glass container).
 * Usage: <ProfileCard size="md" className="mx-auto" />
 * size: 'sm' | 'md' | 'lg'
 */
const sizeMap = {
  sm: { avatar: 'w-24 h-24', name: 'text-lg', role: 'text-xs' },
  md: { avatar: 'w-36 h-36', name: 'text-xl', role: 'text-sm' },
  lg: { avatar: 'w-48 h-48', name: 'text-2xl', role: 'text-base' },
  xl: { avatar: 'w-64 h-64', name: 'text-3xl', role: 'text-base' },
};

const ProfileCard = ({
  size = 'md',
  name = 'Umer Mir',
  role = 'Web Developer',
  className = '',
  imgSrc = '/thumbnails/umer-mir.jpg',
}) => {
  const s = sizeMap[size] || sizeMap.md;
  const fallbacks = useMemo(
    () => [
      imgSrc,
      '/thumbnails/umer-mir.jpeg',
      '/thumbnails/umer-mir.png',
      `${process.env.PUBLIC_URL || ''}/assets/profile.jpg`,
    ],
    [imgSrc]
  );
  const [srcIdx, setSrcIdx] = useState(0);
  const currentSrc = fallbacks[srcIdx] || '';
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.4 }}
      className={`flex flex-col items-center ${className}`}
    >
      {/* Gradient Ring Avatar */}
      <div className={`relative ${s.avatar} rounded-full p-[3px] bg-gradient-to-br from-primary-blue to-primary-purple`} style={{ boxShadow: '0 12px 30px rgba(0,0,0,0.35)' }}>
        <div className="absolute inset-0 rounded-full opacity-30 blur-xl bg-gradient-to-br from-primary-blue to-primary-purple" />
        <div className="relative w-full h-full rounded-full overflow-hidden bg-primary-dark">
          <img
            src={currentSrc}
            alt={name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover rounded-full"
            onError={() => {
              if (srcIdx < fallbacks.length - 1) setSrcIdx((i) => i + 1);
            }}
          />
        </div>
      </div>
      {/* Text */}
      <div className="pt-4 text-center select-none">
        <h3 className={`${s.name} font-poppins font-semibold text-white`}>{name}</h3>
        <p className={`${s.role} text-gray-300`}>{role}</p>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
