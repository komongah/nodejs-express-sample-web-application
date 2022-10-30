export default function exceptionHandler(req, res) {
    const status = 500;
    const message = 'Internal Server Error!';

    return res.status(status).json({
        status,
        message
    });
}
