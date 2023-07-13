import * as AvatarPrimitive from '@radix-ui/react-avatar';

export type AvatarProps = {
  /**
   * The full name of user, we will get the initials from this prop.
   */
  name: string;
  /**
   * Image source, we will use this image as avatar, if it is not provided, we will use the initials.
   */
  src?: string;
};

/**
 * Avatar component to render user images or initials.
 */
export const Avatar = ({ name, src }: AvatarProps) => {
  const getInitials = () =>
    name
      .match(/(\b\S)?/g)!
      .join('')
      .match(/(^\S|\S$)?/g)!
      .join('')
      .toUpperCase();

  return (
    <AvatarPrimitive.Root className="items-center w-10 h-10 rounded-full inline-flex select-none overflow-hidden justify-center cursor-pointer">
      <AvatarPrimitive.Image
        className="object-cover w-full h-full"
        src={src}
        alt={name}
        draggable={false}
      />
      <AvatarPrimitive.Fallback className="bg-primary-500 w-full h-full justify-center items-center flex text-white font-medium text-sm">
        {getInitials()}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};
