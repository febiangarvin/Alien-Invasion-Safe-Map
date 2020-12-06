import React, { Fragment, useState } from "react";

const EditWilayahSiaga = ({ peringatanwilayahsiaga }) => {
  const [wilayahSiaga, setNamaWilayahSiaga] = useState(peringatanwilayahsiaga.wilayah_siaga);

  const updateWilayahSiaga = async e => {
    e.preventDefault();
    try {
      const body = { wilayahSiaga };
      const response = await fetch(
        `http://localhost:5555/api/wilayahsiaga/${peringatanwilayahsiaga.siaga_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/listwilayahsiaga";
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
        data-target={`#id${peringatanwilayahsiaga.siaga_id}`}
      >
        Edit
      </button>

      <div
        class="modal"
        id={`id${peringatanwilayahsiaga.siaga_id}`}
        onClick={() => setNamaWilayahSiaga(peringatanwilayahsiaga.wilayah_siaga)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit an Area</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setNamaWilayahSiaga(peringatanwilayahsiaga.wilayahSiaga)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={wilayahSiaga}
                onChange={e => setNamaWilayahSiaga(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateWilayahSiaga(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setNamaWilayahSiaga(peringatanwilayahsiaga.wilayahSiaga)}
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

export default EditWilayahSiaga;
