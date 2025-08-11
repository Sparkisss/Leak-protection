import type { ComponentProps, ElementType } from 'react';
import cn from 'classnames';

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children: string;
  primary?: boolean;
  secondary?: boolean;
  as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = 'button';

export default function Button<E extends ElementType = typeof defaultElement>({
  children,
  primary,
  secondary,
  as,
  ...otherProps
}: ButtonProps<E>) {
  const classes = cn(
    'flex relative h-auto text-[0.7rem] items-center cursor-pointer font-oxanium justify-center px-6 py-2.5 transition-colors duration-200 bg-[#AD1AAF] sm:text-md',
    { primary, secondary }
  );
  const TagName = as || defaultElement;

  return (
    <TagName className={classes} {...otherProps}>
      <span className="absolute -left-2 w-3 h-full bg-[#AD1AAF]">
        <span className="absolute left-1 top-1/2 w-1.5 h-[70%] bg-black transform -translate-y-1/2"></span>
        <span className="absolute left-0 top w-1.5 h-[25%] bg-black"></span>
        <span className="absolute left-0 bottom-0 w-1.5 h-[25%] bg-black"></span>
      </span>
      <span className="absolute -right-2 w-3 h-full bg-[#AD1AAF]">
        <span className="absolute right-1 top-1/2 w-1.5 h-[70%] bg-black transform -translate-y-1/2"></span>
        <span className="absolute right-0 top w-1.5 h-[25%] bg-black"></span>
        <span className="absolute right-0 bottom-0 w-1.5 h-[25%] bg-black"></span>
      </span>
      {children}
    </TagName>
  );
}
