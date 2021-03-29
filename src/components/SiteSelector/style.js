import styled from 'styled-components';
import { smooth_render } from '../KeyFrames';

export const SiteContainer = styled('div')`
  display: inline-block;
`;

export const NameList = styled('ul')`
  list-style: none !important;
`;

const siteNameColor = {
  melon: '#00cd3c',
  genie: '#0095ff',
  bugs: '#ff3b28',
};

export const SelectOption = styled('li')`
  text-transform: capitalize;
  margin: 0 !important;
  padding: 0 !important;
  animation-duration: ${props => (props.selected ? '2s' : '0.5s')};
  animation-name: ${smooth_render};
  color: ${props => siteNameColor[props['data-site-name'].toLowerCase()]};
`;
