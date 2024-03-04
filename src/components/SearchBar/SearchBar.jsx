
import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBar.module.css';
import { filterNumbers } from '../../redux/filterSlice';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const handleFilterChange = e => dispatch(filterNumbers(e.target.value.trim()));
  const value = useSelector(state => state.filters);

  return (
    <label className={css.search_bar}>
      Find contacts by name
      <input
        className={css.search_barInput}
      type="text"
      value={value }
      onChange={ handleFilterChange} />
    </label>
  )
};