import styled from 'styled-components';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

export const ExpandBtn = styled(MdExpandMore)`
  float: right;
  cursor: pointer;
  z-index: 1000;
`;
export const ShrinkBtn = styled(MdExpandLess)`
  float: right;
  cursor: pointer;
  z-index: 1000;
`;
