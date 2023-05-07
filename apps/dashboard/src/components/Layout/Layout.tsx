import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex h-full">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};
