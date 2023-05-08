export type Menu = {
  name: string;
  href: string;
  current: boolean;
};

export type SubmenuProps = {
  menus?: Menu[];
};

export const Submenu = ({ menus }: SubmenuProps) => {
  if (!menus || !menus?.length) return null;

  return (
    <nav className="flex fixed z-10 w-full overflow-x-auto border-b bg-gray-50 py-4 border-gray-200 ">
      <ul
        role="list"
        className="flex min-w-full flex-none gap-x-6 px-5 text-sm font-medium leading-6 text-gray-400 sm:px-6 lg:px-10"
      >
        {menus.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={
                item.current ? 'text-black' : 'font-normal hover:text-gray-900'
              }
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
