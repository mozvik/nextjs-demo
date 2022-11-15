import React from 'react';

export interface TitleUnderscoredProps extends React.PropsWithChildren  {
  firstUnderscoredWord: number;
  lastUnderscoredWord: number;
}