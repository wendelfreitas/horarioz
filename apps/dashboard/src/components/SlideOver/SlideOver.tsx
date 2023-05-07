export type SlideOverProps = {
  children: React.ReactNode;
};

export const SlideOver = ({ children }: SlideOverProps) => {
  return (
    <aside className="lg:flex hidden relative w-1/4 flex-shrink-0 overflow-y-auto border-l border-gray-200  flex-col ">
      <div className="absolute inset-0 py-8 px-3 sm:px-6 lg:px-6">
        <div className="h-full rounded-lg  border-dashed border-gray-200">
          {children}
        </div>
      </div>
    </aside>
  );
};
