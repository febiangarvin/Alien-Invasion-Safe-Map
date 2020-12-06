import React, { Fragment, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import AdminSubMenu from './adminSubMenu'
import EditWilayahSiaga from "./editWilayahSiaga";
import InputWilayahSiaga from './inputWilayahSiaga';
import '../../css/admin/listWilayahSiaga.css'

const ListWilayahSiaga = () => {
  const [wilayahSiaga, setWilayahSiaga] = useState([]);

  //delete function
  const deleteWilayahSiaga = async id => {
    try {
      const deleteWilayahSiaga = await fetch(`http://localhost:5555/api/wilayahsiaga/${id}`, {
        method: "DELETE"
      });

      setWilayahSiaga(wilayahSiaga.filter(peringatanwilayahsiaga => peringatanwilayahsiaga.siaga_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getWilayahSiaga = async () => {
    try {
      const response = await fetch("http://localhost:5555/api/wilayahsiaga/");
      const jsonData = await response.json();

      setWilayahSiaga(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getWilayahSiaga();
  }, []);

  console.log(wilayahSiaga);

  return (
    <Fragment>
      {" "}
      <AdminSubMenu />
      <div className="wilayah-siaga">
        <InputWilayahSiaga />
        <table class="table text-center">
          <thead>
            <tr>
              <th>Area</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {wilayahSiaga.map(peringatanwilayahsiaga => (
              <tr key={peringatanwilayahsiaga.siaga_id}>
                <td>{peringatanwilayahsiaga.wilayah_siaga}</td>
                <td>
                  <EditWilayahSiaga peringatanwilayahsiaga={peringatanwilayahsiaga} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteWilayahSiaga(peringatanwilayahsiaga.siaga_id)}
                  >
                    Delete
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ListWilayahSiaga;
