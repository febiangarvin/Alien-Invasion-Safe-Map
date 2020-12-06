import React, { Fragment, useState } from "react";

const EditTugasAdmin = ({ tugasadmin }) => {
    const [tugasAdmin, setNamaTugasAdmin] = useState(tugasadmin.tugas_admin);

    const updateTugasAdmin = async e => {
        e.preventDefault();
        try {
            const body = { tugasAdmin };
            const response = await fetch(
                `http://localhost:5555/api/tugasadmin/${tugasadmin.tugas_id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );

            window.location = "/admindashboard";
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
                data-target={`#id${tugasadmin.tugas_id}`}
            >
                Edit
      </button>

            <div
                class="modal"
                id={`id${tugasadmin.tugas_id}`}
                onClick={() => setNamaTugasAdmin(tugasadmin.tugas_admin)}
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Edit a Task</h4>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                onClick={() => setNamaTugasAdmin(tugasadmin.tugasAdmin)}
                            >
                                &times;
              </button>
                        </div>

                        <div class="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                value={tugasAdmin}
                                onChange={e => setNamaTugasAdmin(e.target.value)}
                            />
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-warning"
                                data-dismiss="modal"
                                onClick={e => updateTugasAdmin(e)}
                            >
                                Edit
              </button>
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() => setNamaTugasAdmin(tugasadmin.tugasAdmin)}
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

export default EditTugasAdmin;