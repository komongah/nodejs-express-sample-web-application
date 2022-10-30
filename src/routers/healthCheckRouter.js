import { Router } from 'express';
import healthCheck from './handlers/healthCheckHandler';

const router = Router({ mergeParams: true });

/**
 * @openapi
 *
 * /health-check:
 *   get:
 *     tags:
 *       - System
 *     summary: Check System Health
 *     operationId: Check System Health
 *     description: Check System Health
 *     responses:
 *       200:
 *         description: Health Check Response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Health Check Response'
 *       401:
 *         description: Unauthorized
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *     security:
 *       - 'Bearer Auth': []
 */
router.get('/', healthCheck);

export default router;
