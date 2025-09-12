import ModuleCard from '@/entities/moduleList/ui/ModuleCard';
import { useAppDispatch, useAppSelector } from '@/shared/lib/store/hooks';
import { Card } from '@/shared/ui/Card/Card';
import { useEffect } from 'react';
import { fetchModuleList } from '../model/modulesThunk';
import { STYLES } from '@/pages/DashboardPage/config/dashboardLists';

const ModuleList = () => {
  const dispatch = useAppDispatch();
  const { items, isLoading, error } = useAppSelector(state => state.moduleList);

  useEffect(() => {
    dispatch(fetchModuleList());
  }, [dispatch]);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section className="w-4/5 h-full flex flex-wrap justify-center sm:w-3/6">
      {items.map(obj => (
        <Card key={obj.id} className={STYLES ? STYLES[obj.id] : ''}>
          <ModuleCard {...obj} />
        </Card>
      ))}
    </section>
  );
};

export default ModuleList;
