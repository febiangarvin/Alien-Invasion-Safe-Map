import React, { Fragment, useState } from "react";

const InputWilayahBahaya = () => {
    /*
    - state wilayah
    */
    const [wilayahBahaya, setNamaWilayahBahaya] = useState("");

    /*
    - function untuk submit sebuah form
    */
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { wilayahBahaya };
            const response = await fetch("http://localhost:5555/api/wilayahbahaya", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/listwilayahbahaya";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <h1 className="text-center">High Risk Areas</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="form-control"
                    value={wilayahBahaya}
                    onChange={e => setNamaWilayahBahaya(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputWilayahBahaya;