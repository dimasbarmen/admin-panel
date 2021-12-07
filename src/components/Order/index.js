import {useDispatch, useSelector} from 'react-redux';
import {Actions, Selectors} from '../../store';
import {Header} from './Header';
import {Form} from './Form';

export function Order() {
  const {order, isOpened} = useSelector(Selectors.getOrder);
  const statuses = useSelector(Selectors.getStatuses);

  const dispatch = useDispatch();
  const onClose = () => dispatch(Actions.setOrder({isOpened: false}));
  const onWrapperClose = ({target}) => {
    if (target.classList.contains('order__wrapper')) onClose();
  };

  return (
    <div
      className={`order__wrapper ${isOpened ? 'opened' : ''}`}
      onClick={onWrapperClose}
    >
      <div className={`order ${isOpened ? 'opened' : ''}`}>
        {Boolean(order) && (
          <>
            <Header number={order.id} onClose={onClose} />
            <Form order={order} statuses={statuses} onClose={onClose} />
          </>
        )}
      </div>
    </div>
  )
}
