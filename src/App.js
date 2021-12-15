import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header";
import {Service} from './components/Service';
import {Filters} from './components/Filters';
import {Table} from './components/Table';
import {Order} from './components/Order';
import {useDispatch} from 'react-redux';
import {Actions} from './store';
import {fetchData} from './mock';

function App() {
  const [isFiltersShow, setIsFiltersShow] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    fetchData().then((data => {
      dispatch(Actions.setData({ ...data, status: 'success' }))
    }));
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <Service setIsFiltersShow={setIsFiltersShow} />
      <Filters isShow={isFiltersShow} />
      <Table />
      <Order />
    </div>
  );
}

export default App;
