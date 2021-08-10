import items from './mock/items.json';

const later = (delay, value) =>
  new Promise(resolve => setTimeout(resolve, delay, value));

export const loadItems = async () => await later(1000, items);
