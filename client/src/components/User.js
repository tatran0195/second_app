import React, { useEffect, useState } from 'react';

User.propTypes = {};

function User(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const res = await fetch('/users');
            const json = await res.json();
            setItems(json);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section>
            <div className="container-fluid">
                <h1 className="mt-5">User List</h1>
                <form method="POST" action="/addUser">
                    <div className="input-group justify-content-center">
                        <div className="input-group-prepend">
                            <input type="text" name="name" className="form-control" placeholder="Name" />
                            <input type="email" name="email" className="form-control" placeholder="Email" />
                            <input type="password" name="password" className="form-control" placeholder="Password" />
                            <input type="submit" value="Send" className="btn btn-primary mb-2" />
                        </div>
                    </div>
                </form>

                {items.map((item) => (
                    <div className="row padding" key={item.password}>
                        <div className="alert alert-info rounded-pill" role="alert">
                            <i className="fa fa-user mr-2"></i>
                            <i>
                                {item.name} ({item.email}): {item.password}
                            </i>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default User;
