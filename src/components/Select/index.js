import {useEffect, useRef, useState} from 'react';
import {ArrowIcon} from '../../assets/icons/arrow';
import {Checkbox} from '../Checkbox/Checkbox';
import {getDeclination} from '../../utils';
import {ClearIcon} from '../../assets/icons/clear';
import {Button} from '../Button';

const elementDeclanations = ['элемент', 'элемента', 'элементов'];

export function Select({
  options,
  selectedOptions,
  placeholder = 'Любой',
  onSelect,
  onClear,
  className,
  multiple = false
}) {
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const onClick = ({target}) => {
      const isClose = buttonRef.current &&
        target !== buttonRef.current &&
        !buttonRef.current.contains(target) &&
        listRef.current &&
        !listRef.current.contains(target);

      isClose && setIsOpen(() => false);
    };

    window.addEventListener('click', onClick);

    return () => window.removeEventListener('click', onClick);
  }, []);

  let value = placeholder;
  if (selectedOptions.length) {
    value = selectedOptions.length > 1 ?
      `Выбрано ${selectedOptions.length} ${getDeclination(selectedOptions.length, elementDeclanations)}` :
      selectedOptions[0];
  }

  return (
    <div className={`select ${className || ''}`}>
      <button
        type='button'
        className='select__button'
        onClick={() => setIsOpen(prev => !prev)}
        ref={buttonRef}
      >
        <div className='select__value'>{value}</div>
        {Boolean(selectedOptions.length) && multiple && (
          <Button
            appearance="text"
            size="s"
            icon={<ClearIcon />}
            className="input__clean-button"
            onClick={onClear}
          />
        )}
        <ArrowIcon color='blue' direction={isOpen ? 'up' : 'down'} />
      </button>
      {isOpen && Boolean(options.length) && (
        <div className='select__list' ref={listRef}>
          {options.map((option) => multiple ? (
            <Checkbox
              className='select__option'
              key={option}
              label={option}
              onChange={onSelect}
              checked={selectedOptions.includes(option)}
            />
          ) : (
            <Button
              key={option}
              appearance='text'
              className='select__option'
              onClick={(event) => {
                onSelect(event);
                setIsOpen(false);
              }}
              value={option}
            >
              {option}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
