import type { ComponentProps, ElementType } from 'react';

type TypographyOwnProps<E extends ElementType = ElementType> = {
  children: string;
  as?: E;
};

type TypographyProps<E extends ElementType> = TypographyOwnProps<E> &
  Omit<ComponentProps<E>, keyof TypographyOwnProps>;

const defaultElement = 'div';

export default function Typography<
  E extends ElementType = typeof defaultElement,
>({ children, as, ...otherProps }: TypographyProps<E>) {
  const TagName = as || defaultElement;

  return <TagName {...otherProps}>{children}</TagName>;
}
