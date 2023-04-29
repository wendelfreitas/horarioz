import { Avatar } from '@soloquiz/ui';

export type CollaboratorAvatarProps = {
  /**
   * The full name of user, we will get the initials from this prop.
   */
  name: string;
  /**
   * Image source, we will use this image as avatar, if it is not provided, we will use the initials.
   */
  src?: string;
};

export const CollaboratorAvatar = ({ name, src }: CollaboratorAvatarProps) => {
  const getFirstName = () => name.split(' ')[0];

  return (
    <div className="items-center justify-center inline-flex flex-col flex-wrap">
      <Avatar name={name} src={src} />
      <span className="font-semibold text-xs mt-2 text-gray-500">
        {getFirstName()}
      </span>
    </div>
  );
};
