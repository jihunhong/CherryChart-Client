import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import styled from 'styled-components';

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
