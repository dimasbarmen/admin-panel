import {formatMoney} from '../../../../utils';

export function Table({items, totalSum, currency}) {
  return (
    <div className="order__table">
      <div className="order__table-header">
        <div className="order__table-header-wrapper">
          <ul className="order__table-header-list">
            <li className="order__table-header-item">Артикул</li>
            <li className="order__table-header-item order__table-header-item-center">Наименование</li>
            <li className="order__table-header-item">Цена</li>
          </ul>
        </div>
      </div>
      <div className="order__table-body">
        <div className="order__table-body-wrapper">
          {items.map(({itemCode, name, price}) => (
            <ul className="order__table-body-list" key={itemCode}>
              <li className="order__table-body-item">{itemCode}</li>
              <li className="order__table-body-item order__table-body-item-center">{name}</li>
              <li className="order__table-body-item">{formatMoney(price)} {currency}</li>
            </ul>
          ))}
        </div>
      </div>
      <div className="order__table-footer">
        <span className="order__table-footer-text">Итоговая сумма: {formatMoney(totalSum)} {currency}</span>
      </div>
    </div>
  );
}
