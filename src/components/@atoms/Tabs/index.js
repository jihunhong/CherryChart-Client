import { memo, useState } from 'react';
import { Tab, TabContent, TabNavs, TabsContainer } from './style';

const Tabs = ({ items = [] }) => {
  const [active, setActive] = useState(0);
  const handleClick = e => {
    if (e.target.tagName === 'LI') {
      setActive(parseInt(e.target.dataset.index, 10));
    }
  };
  return (
    <TabsContainer>
      <TabNavs onClick={handleClick}>
        {items.map((item, index) => (
          <Tab
            key={item.key || `${item.label}-${index}`}
            $active={active === index}
            data-index={index}
          >
            {item.label}
          </Tab>
        ))}
      </TabNavs>
      <TabContent>{items[active]?.children}</TabContent>
    </TabsContainer>
  );
};

export default Tabs;
