import {Button} from '../../../Button';
import {TrashIcon} from '../../../../assets/icons/trash';
import {useEffect, useRef, useState} from 'react';
import {getDeclination} from '../../../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {Actions, Selectors} from '../../../../store';

export function Delete() {
  const selectedOrdersCount = useSelector(Selectors.getSelectedOrdersCount);
  const [isShow, setIsShow] = useState(false);
  const modalRef = useRef(null);
  const buttonRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const onClick = ({target}) => {
      const isClose = buttonRef.current &&
        target !== buttonRef.current &&
        !buttonRef.current.contains(target) &&
        modalRef.current &&
        !modalRef.current.contains(target);
      isClose && setIsShow(() => false);
    };

    window.addEventListener('click', onClick);

    return () => window.removeEventListener('click', onClick);
  }, []);

  const onClick = () => {
    setIsShow(prev => !prev);
  };

  return (
    <div className="table__footer-actions-delete">
      <Button
        onClick={onClick}
        icon={<TrashIcon />}
        className="button_red table__footer-actions-button_delete"
        ref={buttonRef}
        disabled={!selectedOrdersCount}
      >
        Удалить
      </Button>
      {isShow && (
        <div className="table__footer-actions-modal" ref={modalRef}>
          <div className="dropdown__delete-title">
            Удалить {selectedOrdersCount}{' '}
            {getDeclination(selectedOrdersCount, ['запись', 'записи', 'записей'])}?
          </div>
          <Button
            className='table__footer-actions-delete-modal-button'
            appearance='text'
            onClick={() => {
              dispatch(Actions.deleteSelectedOrders());
              setIsShow(false);
            }}
          >
            Удалить
          </Button>
          <Button
            className='table__footer-actions-delete-modal-button'
            onClick={() => setIsShow(false)}
          >
            Отмена
          </Button>
        </div>
      )}
    </div>
  );
}
