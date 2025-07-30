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
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-3',
    lg: 'w-16 h-16 border-4',
  };

  const colorClasses = {
    primary: 'border-blue-500 border-t-transparent',
    secondary: 'border-pink-500 border-t-transparent',
    white: 'border-white border-t-transparent',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
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
