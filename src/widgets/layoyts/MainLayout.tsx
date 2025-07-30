import { Outlet } from 'react-router';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Здесь потом можно вставить <Header /> */}
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      {/* И <Footer /> */}
    </div>
  );
}
