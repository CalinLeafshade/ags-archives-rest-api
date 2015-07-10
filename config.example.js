module.exports = {
    db: {
        options : {
            auth: {
                authSource: 'admin'
            },
            user: 'username',
            pass: 'password'
        },
        connString: 'mongodb://host:port/db'
    }
}
