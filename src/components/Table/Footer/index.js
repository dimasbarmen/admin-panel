import {Edit} from './controls/Edit';
import {Delete} from './controls/Delete';
import {useSelector} from 'react-redux';
import {Selectors} from '../../../store';

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
      <div className="table__footer-pagination">
        <div className="table__footer-pagination-pages">
          <button className="button button_page">1</button>
          <button className="button button_page button_transparent">2</button>
          <button className="button button_page button_transparent">3</button>
          <span className="table__footer-pagination-text">...</span>
          <button className="button button_page button_transparent">18</button>
        </div>
        <div className="table__footer-pagination-choose">
          <button className="button button_page button_transparent">#</button>
        </div>
      </div>
    </div>
  );
}
