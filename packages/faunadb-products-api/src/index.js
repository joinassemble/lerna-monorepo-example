import {Router, listen} from 'worktop';

const router = new Router();

router.add('GET', '/', async (request, response) => {
  response.send(200, 'hello world');
});

listen(router.run);