/**
 * @openapi
 *
 * components:
 *   securitySchemes:
 *     'Bearer Auth':
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *       description: OpenID Connect Access Token
 *
 *   schemas:
 *     Health Check Response:
 *        type: object
 *        required:
 *          - status
 *        properties:
 *          status:
 *            type: string
 */
