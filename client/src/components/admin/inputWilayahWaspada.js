import React, { Fragment, useState } from "react";

const InputWilayahWaspada = () => {
    const [wilayahWaspada, setNamaWilayahWaspada] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { wilayahWaspada };
            const response = await fetch("http://localhost:5555/api/wilayahwaspada", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/listwilayahwaspada";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <h1 className="text-center">Low Risk Areas</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="form-control"
                    value={wilayahWaspada}
                    onChange={e => setNamaWilayahWaspada(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputWilayahWaspada;