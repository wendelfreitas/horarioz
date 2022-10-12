---
to: <%= absPath %>/index.tsx
---
import React from 'react';
import * as S from './styles';

export type <%= component_name %>Props = {
  title?: string;
};

export const <%= component_name %> = ({ title = 'Hello Appetizer' }: <%= component_name %>Props) => {
  return <S.Container>{title}</S.Container>;
};
