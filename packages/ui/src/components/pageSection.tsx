import { ComponentProps } from 'react';

export const PageSection = ({
  children,
  ...props
}: ComponentProps<'section'>) => (
  <section
    {...props}
    className={`w-full flex flex-col items-center px-4 ${props.className}`}
  >
    {children}
  </section>
);
