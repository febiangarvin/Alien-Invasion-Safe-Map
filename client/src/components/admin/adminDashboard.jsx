import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import '../../css/admin/adminDashboard.css'

// // ----- ADMIN COMPONENTS ----- // //
import AdminSubMenu from './adminSubMenu'
import EditTugasAdmin from "./editTugasAdmin";
import InputTugasAdmin from './inputTugasAdmin';

const AdminDashboard = ({ setAuth }) => {

    /*
    - state untuk username admin
    */
    const [name, setName] = useState("");


    /*
    - function untuk mengambil user
    */
    const getProfile = async () => {
        try {
            const res = await fetch("http://localhost:5555/dashboard/", {
                method: "POST",
                headers: { jwt_token: localStorage.token }
            });

            const parseData = await res.json();
            setName(parseData.user_name);

        } catch (err) {
            console.error(err.message);
        }
    };

    /*
    - function logout
    */
    const logout = async e => {
        e.preventDefault();
        try {
            localStorage.removeItem("token");
            setAuth(false);
            toast.success("Logout successfully");
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getProfile();
    }, []);

    /*
    - state untuk tugas admin
    */
    const [tugasAdmin, setTugasAdmin] = useState([]);

    /*
    - menghapus tugas-tugas admin
    */
    const deleteTugasAdmin = async id => {
        try {
            const deleteTugasAdmin = await fetch(`http://localhost:5555/api/tugasadmin/${id}`, {
                method: "DELETE"
            });

            setTugasAdmin(tugasAdmin.filter(tugasadmin => tugasadmin.tugas_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    /*
    - mengambil tugas-tugas admin
    */
    const getTugasAdmin = async () => {
        try {
            const response = await fetch("http://localhost:5555/api/tugasadmin/");
            const jsonData = await response.json();

            setTugasAdmin(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTugasAdmin();
    }, []);

    console.log(tugasAdmin);

    return (
        <div>
            <AdminSubMenu />

            <div className="header-dashboard">
                <h2>Welcome!</h2>
                <div onClick={e => logout(e)} className="item-menu button-logout">
                    <a>
                        <p className="icon-item-menu">
                            <i className="fas fa-power-off" />
                        </p>
                    </a>
                </div>
            </div>
            <div className="tugas-admin">
                <InputTugasAdmin />
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Name of Task</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    {/*
                    - melakukan map untuk tugas-tugas admin dari database dalam format tabel
                    */}
                    <tbody>
                        {tugasAdmin.map(tugasadmin => (
                            <tr key={tugasadmin.tugas_id}>
                                <td>{tugasadmin.tugas_admin}</td>
                                <td>
                                    <EditTugasAdmin tugasadmin={tugasadmin} />
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteTugasAdmin(tugasadmin.tugas_id)}
                                    >
                                        Delete
                                </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;