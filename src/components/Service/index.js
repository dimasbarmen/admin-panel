import React from 'react';
import {Button} from '../Button';
import {FilterIcon} from '../../assets/icons/filter';
import {LoadingIcon} from '../../assets/icons/loading';
import {Input} from '../Input';
import {MagnifierIcon} from '../../assets/icons/magnifier';
import {useDispatch, useSelector} from 'react-redux';
import {Actions, Selectors} from '../../store';

function Component({setIsFiltersShow}) {
  const searchValue = useSelector(Selectors.getSearch);
  const dispatch = useDispatch();

  const onChangeSearchValue = (event) => {
    dispatch(Actions.setSearch(event.target.value));
  };
  const onClearSearchValue = () => {
    dispatch(Actions.setSearch(''));
  };

  return (
    <div className="service">
      <div className="service__searchbar">
        <Input
          value={searchValue}
          placeholder="Номер заказа или ФИО"
          className="service__searchbar-field"
          startElement={<MagnifierIcon />}
          onChange={onChangeSearchValue}
          onClear={onClearSearchValue}
          isCleaned
        />
        <Button
          icon={<FilterIcon />}
          className="service__searchbar-filters"
          onClick={() => {setIsFiltersShow((prev) => !prev)}}
        >
          Фильтры
        </Button>
        <Button
          appearance="text"
          onClick={() => dispatch(Actions.resetFilters())}
        >
          Сбросить фильтры
        </Button>
      </div>
      <Button appearance="text" icon={<LoadingIcon />} disabled>Загрузка</Button>
    </div>
  );
}

export const Service = React.memo(Component);
