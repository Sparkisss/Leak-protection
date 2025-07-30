type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <article
      className={`
        border-2 border-solid border-white/40 rounded-sm
        bg-transparent backdrop-blur-sm
        p-4 md:p-6
        transition-all duration-200
        hover:border-white/60
        ${className}
      `}
    >
      {children}
    </article>
  );
};
