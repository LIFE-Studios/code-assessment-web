/**
 * Mocking client-server processing
 */
const TIMEOUT = 100

const products = 'http://tech.work.co/shopping-cart/products.json';

const getProducts = (cb) => {
  // helper method to handle request errors
  function handleErrors(response) {
    if (!response.ok) throw Error(response.statusText);
    return response;
  }

  const request = new Request(products);
  fetch(request)
    .then(handleErrors)
    .then(response => response.json())
    .then(data => cb(data))
    .catch(error => cb({
      'status': 'error',
      'result': error
    }))
}

export default {
  getProducts: (cb) => getProducts(cb),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
