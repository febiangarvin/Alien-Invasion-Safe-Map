import React, { Fragment, useEffect, useState } from "react";

const TableWilayahBahaya = () => {
    /*
    - state untuk wilayah
    */
    const [wilayahBahaya, setWilayahBahaya] = useState([]);

    /*
    - mengambil data dari database
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
            <table className="table text-center">
                {/*
                - melakukan map untuk data wilayah dari database dalam format tabel
                */}
                <tbody>
                    {wilayahBahaya.map(peringatanwilayahbahaya => (
                        <tr key={peringatanwilayahbahaya.bahaya_id}>
                            <td>{peringatanwilayahbahaya.wilayah_bahaya}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default TableWilayahBahaya;