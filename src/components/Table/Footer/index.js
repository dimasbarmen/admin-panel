import {Edit} from './controls/Edit';
import {Delete} from './controls/Delete';
import {useSelector} from 'react-redux';
import {Selectors} from '../../../store';
import {Pagination} from './pagination';

export function Footer() {
  const selectedOrdersCount = useSelector(Selectors.getSelectedOrdersCount);

  return (
    <div className="table__footer">
      <div className="table__footer-actions">
        <div className="table__footer-actions-info">
          Выбрано записей: {selectedOrdersCount}
        </div>
        <Edit />
        <Delete />
      </div>
      <Pagination />
    </div>
  );
}
