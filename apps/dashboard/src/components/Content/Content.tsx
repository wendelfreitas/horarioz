import { SlideOver } from '../SlideOver/SlideOver';

export type ContentProps = {
  children: React.ReactNode;
};

export const Content = ({ children }: ContentProps) => {
  return (
    <div className="relative z-0 flex flex-1 overflow-hidden md:flex md:flex-column">
      <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none bg-gray-100">
        <div className="absolute inset-0 py-8 px-4 sm:px-6 lg:px-8">
          <div className="h-full rounded-lg border-2 border-dashed border-gray-200">
            {children}
          </div>
        </div>
      </main>
      <SlideOver>Hello Slide Over</SlideOver>
    </div>
  );
};
