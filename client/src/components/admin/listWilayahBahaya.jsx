import React, { Fragment, useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link
} from "react-router-dom";
import AdminSubMenu from './adminSubMenu'
import EditWilayahBahaya from "./editWilayahBahaya";
import InputWilayahBahaya from './inputWilayahBahaya'
import '../../css/admin/listWilayahBahaya.css'

const ListWilayahBahaya = () => {
    /*
    - state wilayah
    */
    const [wilayahBahaya, setWilayahBahaya] = useState([]);

    /*
    - function untuk delete wilayah
    */
    const deleteWilayahBahaya = async id => {
        try {
            const deleteWilayahBahaya = await fetch(`http://localhost:5555/api/wilayahbahaya/${id}`, {
                method: "DELETE"
            });

            setWilayahBahaya(wilayahBahaya.filter(peringatanwilayahbahaya => peringatanwilayahbahaya.bahaya_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    /*
    - function untuk mengambil wilayah
    */
    const getWilayahBahaya = async () => {
        try {
            const response = await fetch("http://localhost:5555/api/wilayahbahaya/");
            const jsonData = await response.json();

            setWilayahBahaya(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getWilayahBahaya();
    }, []);

    console.log(wilayahBahaya);

    return (
        <Fragment>
            {" "}
            <AdminSubMenu />
            <div className="wilayah-bahaya">
                <InputWilayahBahaya />
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Area</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    {/*
                    - melakukan map untuk wilayah-wilayah dari database dalam format tabel
                    */}
                    <tbody>
                        {wilayahBahaya.map(peringatanwilayahbahaya => (
                            <tr key={peringatanwilayahbahaya.bahaya_id}>
                                <td>{peringatanwilayahbahaya.wilayah_bahaya}</td>
                                <td>
                                    <EditWilayahBahaya peringatanwilayahbahaya={peringatanwilayahbahaya} />
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteWilayahBahaya(peringatanwilayahbahaya.bahaya_id)}
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

export default ListWilayahBahaya;