import {useState, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {assignSiteName} from "@actions/";
import {SiteContainer, NameList, SelectOption} from "./style";
import {siteNames} from "@config";

const SiteSelector = () => {

    const dispatch = useDispatch();
    const list = siteNames;
    const { site } = useSelector((state) => state.config);
    const [active, setActive] = useState(false);

    const onClick = useCallback((e) => {
        dispatch(assignSiteName({
            site : e.target.getAttribute('data-site-name').toLowerCase()
        }))
        setActive(false);
    }, []);

    return (
        <SiteContainer>
            {
                <NameList>
                
                {
                    active 
                    ?
                    // 선택지 ui
                    list.map((siteName, i) => (
                        <SelectOption onClick={onClick} data-site-name={siteName} key={i}>
                            {siteName}
                        </SelectOption>
                    ))
                    :
                    // 선택된 항목 ui
                    <SelectOption onClick={() => setActive(true)} data-site-name={site} selected>
                        { site }
                    </SelectOption>
                }
                </NameList>
            }
        </SiteContainer>
    )

}

export default SiteSelector;