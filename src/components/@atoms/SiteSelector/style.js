import styled from 'styled-components';

export const SiteContainer = styled('div')`
  display: inline-block;
`;

export const NameList = styled('ul')`
  list-style: none !important;
`;

export const SelectOption = styled('li')`
  text-transform: capitalize;
  margin: 0 !important;
  padding: 0 !important;
  color: var(--${props => props['data-site-name'].toLowerCase()}-color);
`;
