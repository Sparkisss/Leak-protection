import type { ComponentProps, ElementType } from 'react';
import cn from 'classnames';

type InputOwnProps<E extends ElementType = 'input'> = {
  primary?: boolean;
  secondary?: boolean;
  as?: E;
};

type InputProps<E extends ElementType> = InputOwnProps<E> &
  Omit<ComponentProps<E>, keyof InputOwnProps>;

const defaultElement = 'input';

export default function Input<E extends ElementType = typeof defaultElement>({
  primary,
  secondary,
  as,
  className,
  ...otherProps
}: InputProps<E>) {
  const TagName = as || defaultElement;

  const classes = cn(className, {
    primary,
    secondary,
  });

  return <TagName className={classes} {...otherProps} />;
}
