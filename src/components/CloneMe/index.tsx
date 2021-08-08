import React from 'react';

// import { Container } from './styles';

export type CloneMeProps = {
  title: React.ReactNode;
};

export const CloneMe = ({ title = 'CloneMe' }: CloneMeProps) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
