type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  label?: string;
};

export const Spinner = ({
  size = 'md',
  color = 'primary',
  label,
}: SpinnerProps) => {
  const sizeClasses = {
    sm: 'w-16 h-16 border-5',
    md: 'w-22 h-22 border-7',
    lg: 'w-30 h-30 border-9',
  };

  const colorClasses = {
    primary: 'border-blue-500 border-t-transparent',
    secondary: 'border-pink-500 border-t-transparent',
    white: 'border-white border-t-transparent',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full h-full">
      <div
        className={`
          animate-spin rounded-full
          ${sizeClasses[size]}
          ${colorClasses[color]}
        `}
      ></div>
      {label && (
        <p className="text-sm text-gray-600 dark:text-gray-300">{label}</p>
      )}
    </div>
  );
};
