const pool = require('../configs/db.config');

const UserController = {
    getAllUsers: (req, res) => {
        pool.getConnection((err, conn) => {
            if (err) throw err;

            try {
                const QUERY = `SELECT nl.name, nl.email, nl.password FROM namelist as nl`;
                conn.query(QUERY, (err, result) => {
                    conn.release();
                    if (err) throw err;
                    res.send(JSON.stringify(result));
                });
            } catch (e) {
                console.log(e);
            }
        });
    },

    addUser: (req, res) => {
        const userName = req.body.name;
        const userEmail = req.body.email;
        const userPass = req.body.password;
        console.log('User will be added');
        pool.getConnection((err, conn) => {
            if (err) throw err;

            const query = `INSERT INTO namelist(name, email, password) VALUES(?,?,?)`;
            conn.query(query, [userName, userEmail, userPass], (err, result) => {
                conn.release();

                if (err) throw err;

                console.log('User added');
                res.redirect('/users');
                res.end();
            });
        });
    },
};

module.exports = UserController;
