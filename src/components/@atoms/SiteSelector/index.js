import { siteNames } from '@config';
import configSlice from '@reducers/config';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NameList, SelectOption, SiteContainer } from './style';

const SiteSelector = () => {
  const dispatch = useDispatch();
  const list = siteNames;
  const { site } = useSelector(state => state.config);
  const [active, setActive] = useState(false);

  const onClick = useCallback(e => {
    dispatch(
      configSlice.actions.switchSiteName(e.target.getAttribute('data-site-name').toLowerCase()),
    );
    setActive(false);
  }, []);

  return (
    <SiteContainer>
      {
        <NameList>
          {active ? (
            list.map((siteName, i) => (
              <SelectOption onClick={onClick} data-site-name={siteName} key={i}>
                {siteName}
              </SelectOption>
            ))
          ) : (
            <SelectOption onClick={() => setActive(true)} data-site-name={site} selected>
              {site}
            </SelectOption>
          )}
        </NameList>
      }
    </SiteContainer>
  );
};

export default SiteSelector;
