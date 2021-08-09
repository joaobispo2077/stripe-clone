import React from 'react';

// import { Container } from './styles';
export type DropdownOptionsProps = {
  name: string;
  Content: () => React.ReactNode;
};

const DropdownOption: React.FC<DropdownOptionsProps> = ({ name, Content }) => {
  return <button>{name}</button>;
};

export { DropdownOption };
