import { Avatar } from '@/../../../packages/ui/src';
import { useUser } from '@horarioz/hooks';

export const Header = () => {
  const { profile } = useUser();

  const getFirstName = () => profile?.name.split(' ')[0];

  return (
    <div className="flex items-center justify-end border-b border-gray-200 bg-gray-50 px-8 py-0 h-16">
      <div className="flex items-center space-x-3 h-full hover:cursor-pointer">
        {profile && <Avatar name={profile?.name} />}
        <span aria-hidden="true" className="text-sm font-medium">
          {getFirstName()}
        </span>
      </div>
    </div>
  );
};
