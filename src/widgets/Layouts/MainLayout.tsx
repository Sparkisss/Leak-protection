import { Outlet } from 'react-router';
import Header from '../Header/ui/Header';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col w-screen justify-center py-5 px-5 mx-auto">
      {/* Здесь потом можно вставить <Header /> */}
      <Header />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      {/* И <Footer /> */}
    </div>
  );
}
