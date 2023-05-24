import { Submenu, Menu } from '@components/Submenu/Submenu';
import { MyAgenda } from '@components/MyAgenda/MyAgenda';
import cn from 'classnames';

export type ContentProps = {
  children: React.ReactNode;
  submenus?: Menu[];
};

export const Content = ({ children, submenus }: ContentProps) => {
  return (
    <div className="relative z-0 flex flex-1 overflow-hidden md:flex md:flex-column">
      <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none bg-gray-100">
        <Submenu menus={submenus} />
        <div
          className={cn(
            'absolute',
            'inset-0',
            'py-10',
            'sm:py-5',
            'px-5',
            'sm:px-4',
            'lg:px-10',
            'grid',
            !submenus || !submenus?.length ? 'top-0' : 'top-12 sm:top-16 '
          )}
        >
          <div className="h-full rounded-lg col-span-12">{children}</div>
        </div>
      </main>
      <MyAgenda />
    </div>
  );
};
