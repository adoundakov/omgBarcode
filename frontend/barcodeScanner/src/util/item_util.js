export const fetchItems = () => {
  return fetch('http://omgbarcode.herokuapp.com/api/items')
    .then(response => alert(response))
    .catch(err => alert(`ERR ${err}`));
};

export const fetchItems = () => {
  return fetch('http://omgbarcode.herokuapp.com/api/items')
    .then(response => alert(response))
    .catch(err => alert(`ERR ${err}`));
};
