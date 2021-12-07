import {ClearIcon} from '../../assets/icons/clear';
import {Button} from '../Button';
import {LockIcon} from '../../assets/icons/lock';

export function Input({
  value,
  startElement,
  endElement,
  isCleaned,
  className,
  onClear,
  disabled,
  isError,
  ...rest
}) {
  return (
    <div className={`input ${disabled ? 'disabled' : ''} ${isError ? 'error' : ''} ${className || ''}`}>
      {startElement && <span className="input__start-element">{startElement}</span>}
      <input disabled={disabled} {...rest} value={value} />
      {isCleaned && onClear && value && !disabled && (
        <Button
          appearance="text"
          size="s"
          icon={<ClearIcon />}
          className="input__clean-button"
          onClick={onClear}
        />
      )}
      {endElement && <span className="input__end-element">{endElement}</span>}
      {disabled && <span className="input__end-element"><LockIcon /></span>}
    </div>
  );
}
