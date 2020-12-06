import React, { Fragment, useEffect, useState } from "react";

const TableWilayahSiaga = () => {
    const [wilayahSiaga, setWilayahSiaga] = useState([]);

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
            <table className="table text-center">
                <tbody>
                    {wilayahSiaga.map(peringatanwilayahsiaga => (
                        <tr key={peringatanwilayahsiaga.siaga_id}>
                            <td>{peringatanwilayahsiaga.wilayah_siaga}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default TableWilayahSiaga;