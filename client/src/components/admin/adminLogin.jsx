import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom'
import '../../css/admin/adminLogin.css'

const AdminLogin = ({ setAuth }) => {

    /*
   - state untuk input login, yang mengambil parameter name dan password
   */
    const [inputs, setInputs] = useState({
        name: "",
        password: ""
    });


    /*
    - state destructuring untuk inputs
    */
    const { name, password } = inputs;

    const onChange = e =>
        setInputs({ ...inputs, [e.target.name]: e.target.value });

    /*
    - submit form untuk login
    */
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { name, password };
            const response = await fetch(
                "http://localhost:5555/authentication/login",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            );

            const parseRes = await response.json();

            if (parseRes.jwtToken) {
                localStorage.setItem("token", parseRes.jwtToken);
                setAuth(true);
                toast.success("Logged in Successfully");
            } else {
                setAuth(false);
                toast.error(parseRes);
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <div className="admin-login">
                <h1 className="mt-5 text-center">Admin Login</h1>
                <form className="mt-5" onSubmit={onSubmitForm}>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => onChange(e)}
                        className="form-control my-3"
                    />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        className="form-control my-3"
                    />
                    <button className="btn btn-success btn-block">Submit</button>
                </form>
                <Link to='/'>Back</Link>
            </div>
        </Fragment>
    );
};

export default AdminLogin;