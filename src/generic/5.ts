/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair <V, K>{
  key: K,
  value: V,
}

// interface KeyValuePair {
//   [key: string | symbol]: any;
// }

// type KeyValuePair = Record<(string | symbol), any>;

export { };


