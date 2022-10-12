import * as AvatarPrimitive from '@radix-ui/react-avatar';

export type AvatarProps = {
  name: string;
  src?: string;
};

export const Avatar = ({ name, src }: AvatarProps) => {
  const getInitials = () =>
    name
      .match(/(\b\S)?/g)!
      .join('')
      .match(/(^\S|\S$)?/g)!
      .join('')
      .toUpperCase();

  return (
    <AvatarPrimitive.Root className="items-center w-14 h-14 bg-red-300 rounded-full inline-flex select-none overflow-hidden justify-center cursor-pointer">
      <AvatarPrimitive.Image
        className="object-cover w-full h-full"
        src={src}
        alt={name}
        draggable={false}
      />
      <AvatarPrimitive.Fallback className="bg-primary-300 w-full h-full justify-center items-center flex text-white font-medium text-base">
        {getInitials()}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};
