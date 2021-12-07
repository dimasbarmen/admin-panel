import {Checkbox} from '../../Checkbox/Checkbox';
import {SortCell} from './SortCell';
import {useDispatch, useSelector} from 'react-redux';
import {Actions, Selectors} from '../../../store';

export function Header() {
  const getOrdersCount = useSelector(Selectors.getOrdersCount);
  const selectedOrdersCount = useSelector(Selectors.getSelectedOrdersCount);
  const dispatch = useDispatch();

  return (
    <ul className='table__row table__header'>
      <li className='table__cell table__cell-check'>
        <Checkbox
          onChange={({target}) => dispatch(Actions.selectAllOrders(target.checked))}
          checked={getOrdersCount && getOrdersCount === selectedOrdersCount}
        />
      </li>
      <SortCell filed='id' label='#' className='table__cell-id' />
      <SortCell filed='date' label='Дата' className='table__cell-date' />
      <SortCell filed='status' label='Статус' className='table__cell-status' />
      <SortCell filed='itemCount' label='Позиций' className='table__cell-item-count' />
      <SortCell filed='sum' label='Сумма' className='table__cell-sum' />
      <SortCell filed='customer' label='ФИО покупателя' className='table__cell-customer' />
    </ul>
  );
}
