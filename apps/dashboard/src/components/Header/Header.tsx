import { useAuthStore } from '@horarioz/hooks';

export const Header = () => {
  const { user } = useAuthStore();

  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-8 py-0 h-16">
      <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs  text-gray-900">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        Seu site está publicado e operacional.
      </span>
      <div className="flex items-center space-x-3 h-full hover:cursor-pointer">
        <img
          className="h-8 w-8 rounded-full bg-gray-50"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <span aria-hidden="true" className="text-sm ">
          {user?.user_metadata.name}
        </span>
      </div>
    </div>
  );
};
