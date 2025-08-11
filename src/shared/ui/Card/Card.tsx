type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <article
      className={`
        flex flex-col justify-center items-center border-2 border-solid border-white/40 rounded-sms
        bg-transparent backdrop-blur-sm
        p-4 md:p-6
        transition-all duration-200
        hover:border-white/60 rounded-4xl 
        ${className}
      `}
    >
      {children}
    </article>
  );
};
