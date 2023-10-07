import {Router, listen} from 'worktop';
import {getAllProduct, getProduct} from './products/view.js';
import {addProduct,addQuantity} from './products/create.js';

const router = new Router();

router.add('GET', '/', async (request, response) => {
  response.send(200, 'hello world');
});

router.add('GET', '/products', getAllProduct);

router.add('GET', '/products/:productId', getProduct);

router.add('POST', '/products', addProduct);

router.add('PATCH', '/products/:productId/add-quantity', addQuantity);

listen(router.run);