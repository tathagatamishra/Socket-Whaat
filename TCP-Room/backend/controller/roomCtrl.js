exports.getRoom = (req, res) => {
    try {
        let roomID = "A1";
        return res.send({ roomID: roomID });
    } catch (error) {
        console.log(error);
    }
}