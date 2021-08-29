import { siteNames } from '@config';
import useMounted from '@hooks/useMounted';
import chartSlice from '@reducers/chart';
import configSlice from '@reducers/config';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NameList, SelectOption, SiteContainer } from './style';
import { loadChart } from '@actions/chartActions';

const SiteSelector = () => {
  const dispatch = useDispatch();
  const list = siteNames;
  const { site } = useSelector(state => state.config);
  const [active, setActive] = useState(false);
  const initialRender = useMounted();

  const onClick = useCallback(e => {
    dispatch(
      configSlice.actions.switchSiteName(e.target.getAttribute('data-site-name').toLowerCase()),
    );
    setActive(false);
  }, []);

  useEffect(() => {
    if (!initialRender) {
      // 첫 렌더링에서는 이미 SSR로 데이터를 받아온 상태이기 때문에
      dispatch(loadChart({ site }));
    }
  }, [site]);
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
