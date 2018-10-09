/*! p0TeamB v0.0.0 - MIT license */
'use strict';

var p0TeamB = function (list) {
  list.forEach(element =>  {
    element = Cube(element);
  });

  list.forEach(element =>  {
    element = Modulo_3(element);
  });

  list = modulo_first(list);

  list = decrement_if_less_than_first(list);

  list = running_total(list);

  list = diff(list);

  list.forEach(element =>  {
    element = fact(element);
  });

  list.forEach(element =>  {
    element = xor_21(element);
  });

  list.forEach(element =>  {
    element = collatz(element);
  });

  element = fizzbuzz(element);

  return list;
}
