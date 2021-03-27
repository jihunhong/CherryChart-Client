import { ExpandBtn, ShrinkBtn } from "./style";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePlaylist } from "../../actions";

const TogglePlaylistButton = () => {

    const dispatch = useDispatch();
    const { isExpand } = useSelector((state) => state.player);

    const handleExpand = useCallback(() => {
        dispatch(togglePlaylist());
    }, [dispatch]);

    return (
        <>
            {
                isExpand
                ? <ShrinkBtn onClick={handleExpand} />
                : <ExpandBtn onClick={handleExpand} />
            }
        </>
    )
}

export default TogglePlaylistButton;