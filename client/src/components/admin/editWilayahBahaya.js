import React, { Fragment, useState } from "react";

const EditWilayahBahaya = ({ peringatanwilayahbahaya }) => {

    /*
    - state wilayah
    */
    const [wilayahBahaya, setNamaWilayahBahaya] = useState(peringatanwilayahbahaya.wilayah_bahaya);

    /*
    - function untuk update wilayah
    */
    const updateWilayahBahaya = async e => {
        e.preventDefault();
        try {
            const body = { wilayahBahaya };
            const response = await fetch(
                `http://localhost:5555/api/wilayahbahaya/${peringatanwilayahbahaya.bahaya_id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );

            window.location = "/listwilayahbahaya";
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
                data-target={`#id${peringatanwilayahbahaya.bahaya_id}`}
            >
                Edit
      </button>
            <div
                class="modal"
                id={`id${peringatanwilayahbahaya.bahaya_id}`}
                onClick={() => setNamaWilayahBahaya(peringatanwilayahbahaya.wilayah_bahaya)}
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Edit an Area</h4>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                onClick={() => setNamaWilayahBahaya(peringatanwilayahbahaya.wilayahBahaya)}
                            >
                                &times;
              </button>
                        </div>

                        <div class="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                value={wilayahBahaya}
                                onChange={e => setNamaWilayahBahaya(e.target.value)}
                            />
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-warning"
                                data-dismiss="modal"
                                onClick={e => updateWilayahBahaya(e)}
                            >
                                Edit
              </button>
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() => setNamaWilayahBahaya(peringatanwilayahbahaya.wilayahBahaya)}
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

export default EditWilayahBahaya;