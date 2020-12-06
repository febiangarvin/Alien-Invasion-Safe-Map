import React, { Fragment, useState } from "react";

const InputWilayahSiaga = () => {
  const [wilayahSiaga, setNamaWilayahSiaga] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { wilayahSiaga };
      const response = await fetch("http://localhost:5555/api/wilayahsiaga", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/listwilayahsiaga";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center">Medium Risk Areas</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={wilayahSiaga}
          onChange={e => setNamaWilayahSiaga(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputWilayahSiaga;
