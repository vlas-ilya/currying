export default function currying (fn) {
  let fun = (...orig) => {
    let inner = (...val) => fun(...orig, ...val);
    inner.valueOf = () => fn(...orig).valueOf();
    return inner;
  };
  return fun;
};
