import {CircleOrangeIcon} from '../../../assets/icons/circleOrange';
import {CircleBlueIcon} from '../../../assets/icons/circleBlue';
import {CircleGreenIcon} from '../../../assets/icons/circleGreen';
import {CheckIcon} from '../../../assets/icons/check';
import {CancelIcon} from '../../../assets/icons/cancel';

export function StatusCell({status}) {
  let icon;
  let className = 'table__cell table__cell-status';
  switch (status) {
    case 'Новый':
    case 'Отложен':
      icon = <CircleOrangeIcon />;
      break;
    case 'Рассчет':
      icon = <CircleBlueIcon />;
      break;
    case 'Подтвержден':
      icon = <CircleGreenIcon />;
      break;
    case 'Выполнен':
      icon = <CheckIcon className="completed-icon" />;
      className += ' table__cell-status-completed';
      break;
    case 'Отменен':
      icon = <CancelIcon />;
      className += ' table__cell-status-canceled';
      break;
    default: break;
  }

  return (
    <li className={className}>
      {icon}
      <span className='table__cell-status-label'>{status}</span>
    </li>
  );
}
