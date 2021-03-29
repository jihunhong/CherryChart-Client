import { FiSearch } from 'react-icons/fi';
import { CustomInput } from './style';

const SearchBar = () => {
  return (
    <>
      <CustomInput size="large" placeholder="Search for song, artists etc..." prefix={<FiSearch />} />
    </>
  );
};

export default SearchBar;
