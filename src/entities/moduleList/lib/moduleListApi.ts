import { ref, get } from 'firebase/database';
import { db } from '@/shared/lib/firebase';
import type { ModuleList } from '../model/types';

export async function getModuleList(): Promise<ModuleList[]> {
  const rootRef = ref(db, 'object');
  const snapshot = await get(rootRef);
  if (!snapshot.exists()) return [];
  const data = snapshot.val();
  const modules: ModuleList[] = [];

  for (const key in data) {
    if (data[key]?.info) {
      modules.push(data[key].info);
    }
  }
  return modules;
}
