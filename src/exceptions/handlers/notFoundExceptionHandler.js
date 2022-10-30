export default function notFoundExceptionHandler(req, res) {
    const status = 404;
    const message = 'Not found!';

    return res.status(status).json({
        status,
        message
    });
}
