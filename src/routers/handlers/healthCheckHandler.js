async function healthCheck(req, res) {
    return res.status(200).type('application/json').send({
        status: 'UP'
    });
}

export default healthCheck;
