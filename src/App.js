import React, {useState} from 'react';
import {Header} from "./components/Header";
import {Service} from './components/Service';
import {Filters} from './components/Filters';
import {orderStatuses} from './mock';
import {Table} from './components/Table';
import {Order} from './components/Order';

function App() {
  const [isFiltersShow, setIsFiltersShow] = useState(false);

  return (
    <div className="container">
      <Header />
      <Service setIsFiltersShow={setIsFiltersShow} />
      <Filters isShow={isFiltersShow} statuses={orderStatuses} />
      <Table />
      <Order />
    </div>
  );
}

export default App;
