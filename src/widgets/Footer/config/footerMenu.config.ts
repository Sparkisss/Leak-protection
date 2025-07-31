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
