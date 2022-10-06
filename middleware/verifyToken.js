const jwt = require("jsonwebtoken");
const { promisify } = require("util");

/**
 * 1. Check if token exists
 * 2. if not token send res
 * 3. decode the token
 * 4. if valid next
 */

module.exports = async (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                status: "fail",
                error: "Your are not logged in"
            });
        }
        // jwt.verify() is a async function but it don't return anything so you need to convert it into a promise

        const decoded = await promisify(jwt.verify)(token, process.env.TOKEN_SECRET);

        req.user = decoded;

        next();

    } catch (error) {
        res.status(403).json({
            status: "fail",
            error: "Invalid token"
        });
    }
};