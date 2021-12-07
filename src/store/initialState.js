import {orderStatuses, orders} from '../mock';

export const initialState = {
  data: {
    orders,
    statuses: orderStatuses,
  },
  order: {
    id: null,
    isOpened: false,
  },
  search: '',
  filters: {
    isChanged: false,
    current: {
      dates: { start: null, end: null },
      statuses: [],
      summs: { min: null, max: null }
    },
    new: {
      dates: { start: null, end: null },
      statuses: [],
      summs: { min: null, max: null }
    }
  },
  table: {
    sort: {
      field: null, // id | date | status | itemCount | sum | customer
      order: 'asc' // asc | desc
    },
    selectedRows: []
  }
};
