import styled from 'styled-components';

export const TabsContainer = styled.section``;

export const TabNavs = styled.ul`
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 -1rem;
`;

export const Tab = styled.li`
  cursor: pointer;
  display: inline-block;
  margin: 0 1rem;
  transition: color 0.15s ease-in-out;
  color: ${props => (props.$active ? '#fff' : 'var(--font-gray-color)')};
  :hover {
    color: #fff;
  }
`;

export const TabContent = styled.div``;
