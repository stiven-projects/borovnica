import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ className, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={`${
        className ?? ''
      } text-white bg-primary-default px-3 py-2 rounded-lg hover:bg-primary-hover focus:bg-primary-focus transition-colors`}
    ></button>
  );
};

export default Button;
