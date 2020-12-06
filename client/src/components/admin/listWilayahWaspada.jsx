import React, { Fragment, useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link
} from "react-router-dom";
import AdminSubMenu from './adminSubMenu'
import EditWilayahWaspada from "./editWilayahWaspada";
import InputWilayahWaspada from './inputWilayahWaspada';
import '../../css/admin/listWilayahWaspada.css'

const ListWilayahWaspada = () => {
    const [wilayahWaspada, setWilayahWaspada] = useState([]);

    //delete function
    const deleteWilayahWaspada = async id => {
        try {
            const deleteWilayahWaspada = await fetch(`http://localhost:5555/api/wilayahwaspada/${id}`, {
                method: "DELETE"
            });

            setWilayahWaspada(wilayahWaspada.filter(peringatanwilayahwaspada => peringatanwilayahwaspada.waspada_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getWilayahWaspada = async () => {
        try {
            const response = await fetch("http://localhost:5555/api/wilayahwaspada/");
            const jsonData = await response.json();

            setWilayahWaspada(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getWilayahWaspada();
    }, []);

    console.log(wilayahWaspada);

    return (
        <Fragment>
            {" "}
            <AdminSubMenu />
            <div className="wilayah-waspada">
                <InputWilayahWaspada />
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th>Area</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wilayahWaspada.map(peringatanwilayahwaspada => (
                            <tr key={peringatanwilayahwaspada.waspada_id}>
                                <td>{peringatanwilayahwaspada.wilayah_waspada}</td>
                                <td>
                                    <EditWilayahWaspada peringatanwilayahwaspada={peringatanwilayahwaspada} />
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteWilayahWaspada(peringatanwilayahwaspada.waspada_id)}
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

export default ListWilayahWaspada;