import React, { Fragment, useState } from "react";

const EditWilayahWaspada = ({ peringatanwilayahwaspada }) => {
    const [wilayahWaspada, setNamaWilayahWaspada] = useState(peringatanwilayahwaspada.wilayah_waspada);

    const updateWilayahWaspada = async e => {
        e.preventDefault();
        try {
            const body = { wilayahWaspada };
            const response = await fetch(
                `http://localhost:5555/api/wilayahwaspada/${peringatanwilayahwaspada.waspada_id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );

            window.location = "/listwilayahwaspada";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <button
                type="button"
                class="btn btn-warning"
                data-toggle="modal"
                data-target={`#id${peringatanwilayahwaspada.waspada_id}`}
            >
                Edit
      </button>

            <div
                class="modal"
                id={`id${peringatanwilayahwaspada.waspada_id}`}
                onClick={() => setNamaWilayahWaspada(peringatanwilayahwaspada.wilayah_waspada)}
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Edit an Area</h4>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                onClick={() => setNamaWilayahWaspada(peringatanwilayahwaspada.wilayahWaspada)}
                            >
                                &times;
              </button>
                        </div>

                        <div class="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                value={wilayahWaspada}
                                onChange={e => setNamaWilayahWaspada(e.target.value)}
                            />
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-warning"
                                data-dismiss="modal"
                                onClick={e => updateWilayahWaspada(e)}
                            >
                                Edit
              </button>
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() => setNamaWilayahWaspada(peringatanwilayahwaspada.wilayahWaspada)}
                            >
                                Close
              </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditWilayahWaspada;