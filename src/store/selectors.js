import {createSelector} from '@reduxjs/toolkit';

function orders(state) {
  return state.data.orders;
}

function getOrdersCount(state) {
  return state.data.orders.length;
}

function getSelectedOrders(state) {
  return state.table.selectedRows;
}

function getSelectedOrdersCount(state) {
  return state.table.selectedRows.length;
}

function getStatuses(state) {
  return state.data.statuses
}

function getSearch(state) {
  return state.search;
}

function getFilters(state) {
  return state.filters.current;
}

function getDates(state) {
  return state.filters.new.dates;
}

function getSelectedStatuses(state) {
  return state.filters.new.statuses;
}

function getSumms(state) {
  return state.filters.new.summs;
}

function order(state) {
  return state.order;
}

function isFiltersChanged(state) {
  return state.filters.isChanged;
}

function currentSort(state) {
  return state.table.sort;
}

function isLoading(state) {
  return state.data.status === 'loading';
}

function getPaginationData(state) {
  return state.table.pagination;
}

const getOrders = createSelector(
  [orders, getFilters, getSearch, getPaginationData],
  (data, filters, seacrhValue, { page, perPage }) => {
    const {dates, statuses, summs} = filters;

    const orders = page === 'all' ? data : data.slice((page - 1) * perPage, page * perPage);
    if (statuses.length || dates.start || dates.end || summs.min || summs.max || seacrhValue) {
      return orders.filter((order) => {
        let result = true;

        if (statuses.length) result = statuses.includes(order.status);
        if (summs.min !== null) result = result && order.sum >= summs.min;
        if (summs.max !== null) result = result && order.sum <= summs.max;
        if (dates.start) result = result && new Date(order.date) >= new Date(dates.start);
        if (dates.end) result = result && new Date(order.date) <= new Date(dates.end);
        if (seacrhValue) {
          result = result && (
            order.id.toString().includes(seacrhValue) ||
            order.customer.toLowerCase().includes(seacrhValue.toLocaleString())
          );
        }

        return result;
      });
    }

    return orders;
  }
);

const getOrder = createSelector(
  [orders, order],
  (orders, {id, isOpened}) => {
    const existingOrder = orders.find((order) => order.id === id);
    return {
      order: existingOrder,
      isOpened: Boolean(existingOrder && isOpened),
    };
  }
);

const selectors = {
  getOrders,
  getStatuses,
  getSearch,
  getFilters,
  getDates,
  getSelectedStatuses,
  getSumms,
  isFiltersChanged,
  getOrdersCount,
  getSelectedOrders,
  getSelectedOrdersCount,
  currentSort,
  getOrder,
  isLoading,
  getPaginationData
};

export default selectors;
