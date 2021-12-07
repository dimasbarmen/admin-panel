import {Checkbox} from '../../Checkbox/Checkbox';
import {formatDate, formatMoney} from '../../../utils';
import {StatusCell} from './StatusCell';
import {useDispatch, useSelector} from 'react-redux';
import {Actions, Selectors} from '../../../store';
import {useMemo} from 'react';

export function Body() {
  const currentSort = useSelector(Selectors.currentSort);
  const orders = useSelector(Selectors.getOrders);
  const selectedOrders = useSelector(Selectors.getSelectedOrders);

  const dispatch = useDispatch();
  const onChange = (payload) => dispatch(Actions.selectOrder(payload));
  const onClick = (order, target) => {
    if (target.closest('.table__cell')) return;
    dispatch(Actions.setOrder({id: order.id, isOpened: true}))
  };

  const sortedOrders = useMemo(() => {
    if (!currentSort.field) return orders;
    const {field, order} = currentSort;
    return [...orders].sort((a, b) => {
      if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
      else if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
      return 0;
    });
  }, [currentSort, orders]);

  return (
    <div className="table__body">
      {sortedOrders.map((order) => (
        <ul
          className="table__row"
          key={order.id}
          onClick={({target}) => onClick(order, target)}
        >
          <li className="table__cell table__cell-check">
            <Checkbox
              checked={selectedOrders.includes(order.id)}
              onChange={({target}) => onChange({value: order.id, isAdded: target.checked})}
            />
          </li>
          <li className="table__cell table__cell-id">
            {order.id}
          </li>
          <li className="table__cell table__cell-date">
            {formatDate(order.date)}, {order.time}
          </li>
          <StatusCell status={order.status} />
          <li className="table__cell table__cell-item-count">
            {order.status === 'Отменен' ? '-' : order.itemCount}
          </li>
          <li className="table__cell table__cell-sum">
            {order.status === 'Отменен' ? '-' : `${formatMoney(order.sum)} ${order.currency}`}
          </li>
          <li className="table__cell table__cell-customer">
            {order.customer}
          </li>
        </ul>
      ))}
    </div>
  );
}
