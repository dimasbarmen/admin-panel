import {useEffect, useRef, useState} from 'react';
import {EditIcon} from '../../../../assets/icons/edit';
import {Button} from '../../../Button';
import {useDispatch, useSelector} from 'react-redux';
import {Actions, Selectors} from '../../../../store';

export function Edit() {
  const statuses = useSelector(Selectors.getStatuses);
  const selectedOrdersCount = useSelector(Selectors.getSelectedOrdersCount);
  const [isShow, setIsShow] = useState(false);
  const listRef = useRef(null);
  const buttonRef = useRef(null);
  const dispacth = useDispatch();

  useEffect(() => {
    const onClick = ({target}) => {
      const isClose = buttonRef.current &&
        target !== buttonRef.current &&
        !buttonRef.current.contains(target) &&
        listRef.current &&
        !listRef.current.contains(target);
      isClose && setIsShow(() => false);
    };

    window.addEventListener('click', onClick);

    return () => window.removeEventListener('click', onClick);
  }, []);

  const onClick = () => {
    setIsShow(prev => !prev);
  };

  return (
    <div className="table__footer-actions-edit">
      <Button
        onClick={onClick}
        icon={<EditIcon />}
        className="table__footer-actions-button_edit"
        ref={buttonRef}
        disabled={!selectedOrdersCount}
      >
        Изменить статус
      </Button>
      {isShow && (
        <div className="table__footer-actions-modal table__footer-actions-edit-modal" ref={listRef}>
          {statuses.map(status => (
            <Button
              key={status}
              appearance="text"
              className="table__footer-actions-edit-modal-button"
              onClick={() => {
                dispacth(Actions.setStatusToSelectedOrders(status));
                setIsShow(false);
              }}
            >
              {status}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
