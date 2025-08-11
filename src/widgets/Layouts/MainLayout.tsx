import { Outlet } from 'react-router';
import Header from '../Header/ui/Header';
import Footer from '../Footer/ui/Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col w-full mx-auto p-15">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        {<Outlet />}
      </main>
      <Footer />
    </div>
  );
}
