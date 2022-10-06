const jwt = require("jsonwebtoken");


exports.generateToken = (userInfo) => {
    const payload = {
        email: userInfo.email,
        role: userInfo.role
    };
    // first will be payload (your data), then will be secret "node> crypto.randomBytes(64).toString("hex")",then is options(expire data etc) 

    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: "7days"
    });

    return token;
}; 