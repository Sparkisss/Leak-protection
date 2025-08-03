// Тип для пункта меню
export type FooterMenuItem = {
  id: string;
  label: string;
};

// Меню "About"
export const menuAbout: FooterMenuItem[] = [
  { id: 'about', label: 'About' },
  { id: 'live', label: 'Live actions' },
  { id: 'blog', label: 'Blog' },
  { id: 'activity', label: 'Activity' },
];

// Меню "Support"
export const menuSupport: FooterMenuItem[] = [
  { id: 'help', label: 'Help & Support' },
  { id: 'details', label: 'Item details' },
  { id: 'profile', label: 'Author profile' },
  { id: 'collection', label: 'Collection' },
];

// Ссылки на иконки соц сетей
export const socialLinks = [
  {
    name: 'YouTube',
    url: 'https://youtube.com/@yourguard',
    icon: '/socialMedia/Y.svg',
  },
  { name: 'X', url: 'https://x.com/yourguard', icon: '/socialMedia/X.svg' },
  {
    name: 'Facebook',
    url: 'https://facebook.com/yourguard',
    icon: '/socialMedia/F.svg',
  },
  {
    name: 'Google',
    url: 'https://google.com/search?q=yourguard',
    icon: '/socialMedia/G.svg',
  },
];
// Тескт описание
export const description =
  'Yourguard is powerfull tool to protect you flat or hous from disasters. We use top solutions and equipment to made you life more saftly.';
export const rights = 'All rights reserved @Mr.Igor';
