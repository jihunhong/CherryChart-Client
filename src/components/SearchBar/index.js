import { CustomInput } from "./style";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
    return (
        <>
            <CustomInput size="large" placeholder="Search for song, artists etc..." prefix={<FiSearch />} />
        </>
    )
}

export default SearchBar;