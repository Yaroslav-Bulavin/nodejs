
const User = require("./models/UserModel");

module.exports = (app) => {
    app.get("/", (req, res) => {
        User.find((err, users) => {
            if (err) {
                res.send(err);
            } else {
                res.json(users);
            }
        });

    });
    app.post("/", (req, res) => {
        res.send(users);
    })
};