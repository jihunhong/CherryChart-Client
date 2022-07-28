import { Typography } from 'antd';
import styled from 'styled-components';

export const Span = styled(Typography.Text)`
  ${props => (props.type !== 'secondary' ? `color: var(--font-plain-color);` : null)}
  svg {
    margin-right: 4px;
  }
`;
