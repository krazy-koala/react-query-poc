const filterObject = (obj, predicate) => {
  return Object.keys(obj)
    .filter((key) => predicate(obj[key]))
    .reduce((res, id) => {
      res[id] = obj[id];
      return res;
    }, {});
};

export default filterObject;
