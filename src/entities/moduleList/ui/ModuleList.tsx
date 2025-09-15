import ModuleCard from '@/entities/moduleList/ui/ModuleCard';
import { useAppDispatch, useAppSelector } from '@/shared/lib/store/hooks';
import { Card } from '@/shared/ui/Card/Card';
import { useEffect, useState } from 'react';
import { fetchModuleList } from '../model/modulesThunk';
import { getClass } from '../lib/getCardClass';
import { handleModuleClick } from '../lib/handleModuleClick';

const ModuleList = () => {
  const dispatch = useAppDispatch();
  const { items, isLoading, error } = useAppSelector(state => state.moduleList);
  const [activeId, setActiveId] = useState<number>(2);

  useEffect(() => {
    dispatch(fetchModuleList());
  }, [dispatch]);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section className="relative w-4/5 h-full flex justify-center sm:w-3/6">
      {items.map((obj, index) => (
        <Card
          key={obj.id}
          className={
            getClass(index, items, activeId) + ' transition-all duration-500'
          }
        >
          <ModuleCard
            {...obj}
            onClick={() =>
              handleModuleClick(dispatch, setActiveId, obj.id, obj.name)
            }
          />
        </Card>
      ))}
    </section>
  );
};

export default ModuleList;
