import {Button} from '../../Button';
import {ClearIcon} from '../../../assets/icons/clear';

export function Header({number, onClose}) {
  return (
    <div className='order__header'>
      <h1 className="order__header-text">Заявка #{number}</h1>
      <Button
        icon={<ClearIcon />}
        className='order__header-close-button'
        onClick={onClose}
      />
    </div>
  )
}
