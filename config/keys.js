module.exports = {
    mongoURI: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-auth',
    secretOrKey: "secret"
};
