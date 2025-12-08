const SUBTLE_COLORS = [
  '#708993',
  '#A1C2BD',
  '#C1856D',
  '#E8DFCA',
  '#896C6C',
  '#6D94C5',
  '#B8A9C9',
  '#8B7355',
  '#7B9B7B',
  '#A67C8A',
  '#6B8CAE',
  '#D4B896',
];

const getLuminance = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const [rs, gs, bs] = [r, g, b].map((c) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  );

  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
};

const getTextColor = (bgHex: string) => {
  const luminance = getLuminance(bgHex);
  return luminance > 0.5 ? '#1f2937' : '#f9fafb';
};

export const getAvatarColor = (name: string) => {
  if (!name) {
    const bgColor = SUBTLE_COLORS[0];
    return { backgroundColor: bgColor, color: getTextColor(bgColor) };
  }

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % SUBTLE_COLORS.length;
  const bgColor = SUBTLE_COLORS[index];

  return { backgroundColor: bgColor, color: getTextColor(bgColor) };
};

export const getInitials = (name: string) => {
  if (!name) return 'UN';
  return name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();
};
