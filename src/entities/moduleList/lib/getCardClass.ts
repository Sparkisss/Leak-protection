import { STYLES } from '@/pages/DashboardPage/config/dashboardLists';
import type { ModuleList } from '../model/types';

export const getClass = (
  index: number,
  items: ModuleList[],
  activeId: number
) => {
  if (items.length !== 3) return ''; // защита
  const activeIndex = activeId ? items.findIndex(i => i.id === activeId) : 0;

  if (index === activeIndex) return STYLES[1]; // центр
  if (index === (activeIndex + 1) % 3) return STYLES[2]; // справа
  if (index === (activeIndex + 2) % 3) return STYLES[3]; // слева
  return '';
};
