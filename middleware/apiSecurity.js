const fs = require('fs');
const dotenv = require('dotenv');
const configData = fs.readFileSync('.env');
const buf = Buffer.from(configData);
const config = dotenv.parse(buf);

const jwt = require('jsonwebtoken');

module.exports = {

    requireLogin: (req, res, next) => {
        jwt.verify(req.headers.authorization, config.SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'you_must_be_logged_in' })
            }
            req.user = decoded;
            next();
        });
    },



    requireAdminRole: (req, res, next) => {  
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'you_are_logged_in_but_you_do_not_have_permission_to_perform_this_action' });
        }
        next();
    }

}