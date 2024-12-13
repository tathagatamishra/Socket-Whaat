exports.sendMessage = (req, res) => {
    try {
        let message = req.body.message;
        console.log(message);
        return res.send({ message: message });
    } catch (error) {
        console.log(error);
    }
}

exports.createUser = (req, res) => {
    try {
        let username = req.body.username;
        console.log(username);
        return res.send({ username: username });
    } catch (error) {
        console.log(error);
    }
}