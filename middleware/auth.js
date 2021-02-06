const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if(!token)
            return res.status(400).json({msg: "Inavlid Authentication"});

        jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, user) => {
            if(err)
                return res.status(400).json({msg: "Authorization Invalid"});

            req.user = user;
            next();
        })
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}

module.exports = auth;