import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";

const InputTugasAdmin = () => {
    const [tugasAdmin, setNamaTugasAdmin] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { tugasAdmin };
            const response = await fetch("http://localhost:5555/api/tugasadmin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/admindashboard";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <h1 className="text-center">Task Lists:</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="form-control"
                    value={tugasAdmin}
                    onChange={e => setNamaTugasAdmin(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputTugasAdmin;