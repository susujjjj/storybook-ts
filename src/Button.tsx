import React, { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
}

export const Button = ({ children, ...props }: Props) => {
  return <button {...props}>{children}</button>;
};
// function Button({}: Props): ReactElement {
//   return <div></div>;
// }

export default Button;
