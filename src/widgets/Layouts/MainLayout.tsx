import { Outlet } from 'react-router';
import Header from '../Header/ui/Header';
import Footer from '../Footer/ui/Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col w-screen items-center justify-center py-5 px-15 mx-auto">
      <Header />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
