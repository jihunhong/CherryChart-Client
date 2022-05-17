import React from 'react';
import styled from 'styled-components';

declare const RowAligns: ['middle', 'stretch'];
declare const RowJustify: ['start', 'end', 'center', 'space-around', 'space-between'];
export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: typeof RowAligns[number];
  justify?: typeof RowJustify[number];
}

export const StyledRow = styled.div<RowProps>`
  display: flex;
  align-items: ${props => props.align || 'middle'};
  justify-content: ${props => props.justify || 'center'};
`;
