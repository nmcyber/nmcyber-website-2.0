import { Router } from 'express';
import { consumeToken, requestResource } from '../controllers/resource-controller';

const router = Router();

router.post('/resources/:assetId/request', requestResource);
router.get('/resources/token/:tokenId/consume', consumeToken);
router.post('/resources/token/:tokenId/consume', consumeToken);

export { router as resourceRouter };
