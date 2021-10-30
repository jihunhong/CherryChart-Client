import { Typography } from 'antd';
import styled from 'styled-components';

export const Span = styled(Typography.Text)`
  ${props => (props.type !== 'secondary' ? `color: var(--font-primary-color);` : null)}
`;