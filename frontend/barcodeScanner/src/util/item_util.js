export const fetchItems = (success, error) => {
  return fetch('http://omgbarcode.herokuapp.com/api/items')
    .then(response => response.json())
    .then(response => success(response))
    .catch(err => error(err));
};
