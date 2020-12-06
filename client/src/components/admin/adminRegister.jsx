import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";
import AdminSubMenu from './adminSubMenu'
import '../../css/admin/adminRegister.css'

const AdminRegister = ({ setAuth }) => {
    const [inputs, setInputs] = useState({
        name: "",
        password: ""
    });

    const { name, password } = inputs;

    const onChange = e =>
        setInputs({ ...inputs, [e.target.name]: e.target.value });

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { password, name };
            const response = await fetch(
                "http://localhost:5555/authentication/register",
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
                toast.success("Registered Successfully");
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
            <AdminSubMenu />
            <div className="admin-register">
                <h1 className="text-center">Register New Admin</h1>
                <form className="d-flex flex-column mt-5" onSubmit={onSubmitForm}>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Username"
                        onChange={e => onChange(e)}
                        className="form-control my-3"
                    />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={e => onChange(e)}
                        className="form-control my-3"
                    />
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </Fragment>
    );
};

export default AdminRegister;