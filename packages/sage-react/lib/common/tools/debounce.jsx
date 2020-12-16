/**
 *
 * @param {callback} function      callback function to be executed
 * @param {time} string           string value of time to wait
 * @return {function}
 */

export const debounce = (callback, time) => {
  let timeout;

  return (...args) => {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), time);
  };
};
