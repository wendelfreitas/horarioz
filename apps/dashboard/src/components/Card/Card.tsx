type CardProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

export const Card = ({ children, title, description }: CardProps) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg border-gray-200 border">
      <div className="px-4 sm:p-6">
        {title && (
          <h1 className="text-sm sm:text-base font-semibold mb-1">{title}</h1>
        )}
        {description && (
          <p className="text-xs sm:text-sm text-gray-500 mb-5">{description}</p>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};
