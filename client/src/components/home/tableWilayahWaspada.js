import React, { Fragment, useEffect, useState } from "react";

const TableWilayahWaspada = () => {
    const [wilayahWaspada, setWilayahWaspada] = useState([]);

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

            <table className="table text-center">
                <tbody>
                    {wilayahWaspada.map(peringatanwilayahwaspada => (
                        <tr key={peringatanwilayahwaspada.waspada_id}>
                            <td>{peringatanwilayahwaspada.wilayah_waspada}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default TableWilayahWaspada;