export const getLocalStorage = item => {
  if (typeof localStorage !== 'undefined') {
    return JSON.parse(localStorage.getItem(item));
  }
  return null;
};

export const setLocalStorage = (item, value) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(item, JSON.stringify(value));
  }
};
