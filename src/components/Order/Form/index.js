import React, {useEffect, useState} from 'react';
import {Input} from '../../Input';
import {Button} from '../../Button';
import {CheckIcon} from '../../../assets/icons/check';
import {Select} from '../../Select';
import {useDispatch} from 'react-redux';
import {Actions} from '../../../store';
import {Table} from './Table';

const MOCK_ACCEPTED_CODE = '0000';

export function Form({order, statuses, onClose}) {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [formState, setFormState] = useState({ customer: '', status: '', code: '' });
  const onSubmit = (event) => {
    event.preventDefault();
    if (MOCK_ACCEPTED_CODE !== formState.code.trim()) {
      setError('Код подтверждения неверен');
      return;
    }
    dispatch(Actions.alterOrder({
      customer: formState.customer,
      status: formState.status,
    }));
    onClose();
  };

  useEffect(() => {
    setFormState((prev) => ({
      ...prev,
      customer: order.customer,
      status: order.status
    }));

    return () => {
      setError('');
    };
  }, [order]);

  return (
    <form className="order__form" onSubmit={onSubmit}>
      <div className="order__form-body">
        <label htmlFor="orderDate" className="order__form-body-label">
          Дата и время заказа
        </label>
        <Input
          type="datetime-local"
          id="orderDate"
          className="order__form-body-field"
          value={`${order.date}T${order.time}`}
          disabled
        />
        <label htmlFor="orderCustomer" className="order__form-body-label">
          ФИО покупателя
        </label>
        <Input
          id="orderCustomer"
          className="order__form-body-field"
          placeholder="Введите ФИО покупателя"
          value={formState.customer}
          onChange={({target}) => setFormState(prev => ({...prev, customer: target.value}))}
        />
        {Boolean(order.items.length) && <Table items={order.items} totalSum={order.sum} currency={order.currency} />}
        <label htmlFor="loyalty" className="order__form-body-label">
          Уровень лояльности
        </label>
        <Input
          id="loyalty"
          className="order__form-body-field"
          placeholder="Введите уровень лояльности"
          value={order.loyality}
          disabled
        />
        <label className="order__form-body-label">
          Статус заказа
        </label>
        <Select
          options={statuses}
          selectedOptions={[formState.status]}
          className='order__form-body-field'
          onSelect={({target}) => setFormState(prev => ({...prev, status: target.value}))}
        />
        <label htmlFor="code" className="order__form-body-label">
          Код подтверждения
        </label>
        <Input
          id="code"
          className="order__form-body-field"
          placeholder="Введите код подтверждения"
          value={formState.code}
          onChange={({target}) => {
            setError('');
            setFormState(prev => ({...prev, code: target.value}));
          }}
          isError={Boolean(error)}
        />
      </div>
      <div className="order__form-footer">
        {Boolean(error) && <div className="order__form-footer-info">{error}</div>}
        <Button type="submit" icon={<CheckIcon />}>Сохранить</Button>
      </div>
    </form>
  );
}
