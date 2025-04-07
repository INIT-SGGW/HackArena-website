import { ComponentProps } from 'react';

type Props = ComponentProps<'div'> & {
  paddingTop?: string;
};

export function Page({
  children,
  paddingTop = 'var(--spacing) * 16',
  ...props
}: Props) {
  return (
    <div
      {...props}
      style={{ paddingTop: `calc(96px + (${paddingTop}))` }}
      className={`px-4 py-16 pb-30 min-h-[500px] ${props.className}`}
    >
      {children}
    </div>
  );
}
