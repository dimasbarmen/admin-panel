import React from 'react';
import { SunIcon } from "../../assets/icons/sun";
import { Button } from "../Button";

function Component({changeTheme}) {
  return (
    <header className="header">
      <div className="header__title">Список заказов</div>
      <div className="header__switch">
        <Button
          icon={<SunIcon />}
          appearance='text'
          onClick={changeTheme}
        >
          Светлая тема
        </Button>
      </div>
    </header>
  )
}

export const Header = React.memo(Component);
