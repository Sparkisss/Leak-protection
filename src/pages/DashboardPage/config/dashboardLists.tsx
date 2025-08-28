import type { Mode } from '@/entities/device/model/types';

interface ListItem {
  id: number;
  mode: Mode;
  icon: 'manual' | 'auto';
  title: string;
}

export const listOfObjects = [
  {
    id: 1,
    title: 'My house',
    device: 'Leak protection',
    img: '/cards/object1.png',
    styles:
      'z-3 translate-x-0 -translate-y-5 scale-100 opacity-100 absolute sm:-translate-y-10 md:-translate-y-20',
  },
  {
    id: 2,
    title: 'My office',
    device: 'Leak protection',
    img: '/cards/object2.png',
    styles:
      'z-2 -translate-x-10 scale-95 opacity-80 absolute sm:-translate-y-5 sm:-translate-x-10 md:-translate-x-18 lg:-translate-x-25 xl:-translate-x-30',
  },
  {
    id: 3,
    title: 'My countryhouse',
    device: 'Leak protection',
    img: '/cards/object3.png',
    styles:
      'z-1 translate-x-10 translate-y-5 scale-[0.9] opacity-80 absolute sm:translate-y-0 sm:translate-x-10 md:translate-y-10 md:translate-x-18 lg:translate-x-25 xl:translate-x-30',
  },
];
export const listOfMods: ListItem[] = [
  { id: 1, mode: 0, icon: 'auto' as const, title: 'auto' },
  {
    id: 2,
    mode: 1,
    icon: 'manual' as const,
    title: 'manual valve 1 open',
  },
  {
    id: 3,
    mode: 2,
    icon: 'manual' as const,
    title: 'manual valve 1 close',
  },
  {
    id: 4,
    mode: 3,
    icon: 'manual' as const,
    title: 'manual valve 2 open',
  },
  {
    id: 5,
    mode: 4,
    icon: 'manual' as const,
    title: 'manual valve 2 close',
  },
];
export const listOfEvents: ListItem[] = [
  { id: 6, mode: 5, icon: 'manual' as const, title: 'Reset Alarm' },
  { id: 7, mode: 6, icon: 'manual' as const, title: 'Valve' },
];
