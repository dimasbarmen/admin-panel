import {CheckIcon} from '../../assets/icons/check';

export function Checkbox({label, checked, disabled, onChange, className}) {
  return (
    <label className={`checkbox ${className || ''}`}>
      <input
        type="checkbox"
        className="checkbox__input"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        value={label}
      />
      <div className="checkbox__icon"><CheckIcon /></div>
      {label && (<span className="checkbox__label">{label}</span>)}
    </label>
  );
}
