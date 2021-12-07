import {ArrowIcon} from '../../../assets/icons/arrow';
import {useDispatch, useSelector} from 'react-redux';
import {Actions, Selectors} from '../../../store';

export function SortCell({label, className, filed}) {
  const currentSort = useSelector(Selectors.currentSort);
  const dispatch = useDispatch();
  return (
    <li
      className={`table__cell table__sort-cell ${className || ''}`}
      onClick={() => dispatch(Actions.setSort(filed))}
    >
      <span className='table__sort-cell-label'>{label}</span>
      {currentSort.field === filed && (
        <ArrowIcon direction={currentSort.order === 'asc' ? 'up' : 'down'} />
      )}
    </li>
  );
}
