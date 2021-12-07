import React from 'react';
import {Filter} from './Filter';
import {Input} from '../Input';
import {Button} from '../Button';
import {Select} from '../Select';
import {useDispatch, useSelector} from 'react-redux';
import {Actions, Selectors} from '../../store';

function Component({isShow}) {
  const statuses = useSelector(Selectors.getStatuses);
  const isFiltersChanged = useSelector(Selectors.isFiltersChanged);
  const dates = useSelector(Selectors.getDates);
  const selectedStatuses = useSelector(Selectors.getSelectedStatuses);
  const summs = useSelector(Selectors.getSumms);

  const dispatch = useDispatch();
  const onSelect = (event) => {
    const {checked, value} = event.target;
    dispatch(Actions.setStatus({isAdded: checked, value}));
  };
  const onClear = () => dispatch(Actions.clearStatuses());

  return (
    <div className={`filters__wrapper ${!isShow && 'hidden'}`}>
      <div className="filters">
        <Filter title="Дата оформления">
          <Input
            value={dates.start || ''}
            type="date"
            className="filters__item-date-input"
            startElement="с"
            isCleaned
            onChange={({target}) => dispatch(Actions.setDateStart(target.value))}
            onClear={() => dispatch(Actions.setDateStart(null))}
          />
          <Input
            value={dates.end || ''}
            type="date"
            className="filters__item-date-input"
            startElement="по"
            isCleaned
            onChange={({target}) => dispatch(Actions.setDateEnd(target.value))}
            onClear={() => dispatch(Actions.setDateEnd(null))}
          />
        </Filter>
        <Filter title="Статус заказа">
          <Select
            options={statuses}
            selectedOptions={selectedStatuses}
            className='filters__status-select'
            onSelect={onSelect}
            onClear={onClear}
            multiple
          />
        </Filter>
        <Filter title="Сумма заказа">
          <Input
            value={summs.min || ''}
            className="filters__item-sum-input"
            startElement="от"
            isCleaned
            onChange={({target}) => dispatch(Actions.setSummMin(target.value))}
            onClear={() => dispatch(Actions.setSummMin(null))}
          />
          <Input
            value={summs.max || ''}
            className="filters__item-sum-input"
            startElement="до"
            isCleaned
            onChange={({target}) => dispatch(Actions.setSummMax(target.value))}
            onClear={() => dispatch(Actions.setSummMax(null))}
          />
        </Filter>
        <Filter>
          <Button
            className="filters__button_apply"
            appearance="text"
            disabled={!isFiltersChanged}
            onClick={() => dispatch(Actions.acceptFilters())}
          >
            Применить
          </Button>
        </Filter>
      </div>
    </div>
  );
}

export const Filters = React.memo(Component);
