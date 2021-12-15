import {initialState} from './initialState';

function setData(state, { payload }) {
  state.data = payload;
  state.table.pagination = {
    ...state.table.pagination,
    page: 1,
    pageCount: Math.ceil(payload.orders.length / state.table.pagination.perPage),
  };
}

function setSearch(state, { payload }) {
  state.search = payload;
}

function resetFilters(state) {
  state.filters = { ...initialState.filters };
}

function setDateStart(state, { payload }) {
  state.filters.new.dates.start = payload;
  state.filters.isChanged = JSON.stringify(state.filters.new) !== JSON.stringify(state.filters.current);
}

function setDateEnd(state, { payload }) {
  state.filters.new.dates.end = payload;
  state.filters.isChanged = JSON.stringify(state.filters.new) !== JSON.stringify(state.filters.current);
}

function setSummMin(state, { payload }) {
  const num = parseFloat(payload.trim());
  state.filters.new.summs.min = Number.isNaN(num) ? null : num;
  state.filters.isChanged = JSON.stringify(state.filters.new) !== JSON.stringify(state.filters.current);
}

function setSummMax(state, { payload }) {
  const num = parseFloat(payload.trim());
  state.filters.new.summs.max = Number.isNaN(num) ? null : num;
  state.filters.isChanged = JSON.stringify(state.filters.new) !== JSON.stringify(state.filters.current);
}

function setStatus(state, { payload }) {
  const { isAdded, value } = payload;
  state.filters.new.statuses = isAdded ?
    [...state.filters.new.statuses, value] :
    state.filters.new.statuses.filter(item => item !== value);
  state.filters.isChanged = JSON.stringify(state.filters.new) !== JSON.stringify(state.filters.current);
}

function clearStatuses(state) {
  state.filters.new.statuses = [];
  state.filters.isChanged = JSON.stringify(state.filters.new) !== JSON.stringify(state.filters.current);
}

function selectOrder(state, { payload }) {
  const { isAdded, value } = payload;
  state.table.selectedRows = isAdded ?
    [...state.table.selectedRows, value] :
    state.table.selectedRows.filter(item => item !== value);
}

function selectAllOrders(state, { payload }) {
  state.table.selectedRows = payload ? state.data.orders.map((order) => order.id) : [];
}

function deleteSelectedOrders(state) {
  state.data.orders = state.data.orders.filter(({id}) => !state.table.selectedRows.includes(id));
  state.table.selectedRows = [];
}

function setStatusToSelectedOrders(state, { payload }) {
  state.data.orders = state.data.orders.map((order) => {
    if (state.table.selectedRows.includes(order.id)) {
      return {...order, status: payload};
    }
    return order;
  });
  state.table.selectedRows = [];
}

function acceptFilters(state) {
  state.filters.current = JSON.parse(JSON.stringify(state.filters.new));
  state.filters.isChanged = false;
}

function setSort(state, { payload }) {
  if (!state.table.sort.field || state.table.sort.field !== payload) {
    state.table.sort = {field: payload, order: 'asc'};
  } else if (state.table.sort.order === 'asc') {
    state.table.sort = {field: payload, order: 'desc'};
  } else {
    state.table.sort = {field: null, order: 'desc'};
  }
}

function setOrder(state, { payload }) {
  state.order.id = payload?.id || state.order.id;
  state.order.isOpened = payload?.isOpened ?? state.order.isOpened;
}

function alterOrder(state, { payload }) {
  state.data.orders = state.data.orders.map(order => {
    if (order.id === state.order.id) return { ...order, ...payload };
    return order;
  });
}

function setPage(state, { payload }) {
  state.table.pagination.page = payload;
}

const actions = {
  setData,
  setSearch,
  resetFilters,
  setDateStart,
  setDateEnd,
  setSummMin,
  setSummMax,
  setStatus,
  clearStatuses,
  selectOrder,
  selectAllOrders,
  deleteSelectedOrders,
  setStatusToSelectedOrders,
  acceptFilters,
  setSort,
  setOrder,
  alterOrder,
  setPage
};

export default actions;
