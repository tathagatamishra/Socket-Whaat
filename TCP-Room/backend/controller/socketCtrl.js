exports.sendMessage = (req, res) => {
    try {
        let message = req.body.message;
        console.log(message);
        return res.send({ message: message });
    } catch (error) {
        console.log(error);
    }
}