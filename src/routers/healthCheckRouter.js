import { Router } from 'express';
import healthCheck from './handlers/healthCheckHandler';

const router = Router({ mergeParams: true });

router.get('/', healthCheck);

export default router;
