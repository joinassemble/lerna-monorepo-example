import {Router, listen} from 'worktop';
import {getAllProduct, getProduct} from './products/view.js'

const router = new Router();

router.add('GET', '/', async (request, response) => {
  response.send(200, 'hello world');
});

router.add('GET', '/products', getAllProduct);

router.add('GET', '/products/:productId', getProduct);

listen(router.run);