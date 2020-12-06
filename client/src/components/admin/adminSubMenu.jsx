import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import '../../css/admin/adminSubMenu.css'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link
} from "react-router-dom";

const AdminSubMenu = () => {

    return (
        <div>
            <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
            <link rel="stylesheet" type="text/css" href="css/style.css" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />

            <div className="sub-menu">
                <div className="shortcut">
                    <div className="menus">

                        <div className="item-menu">
                            <Link to='/'>
                                <p className="icon-item-menu">
                                    <i className="fas fa-home"></i>
                                </p>
                            </Link>
                        </div>

                        <div className="item-menu">
                            <Link to="/admindashboard">
                                <p className="icon-item-menu">
                                    <i className="fas fa-desktop"></i>
                                </p>
                            </Link>
                        </div>

                        <div className="item-menu">
                            <Link to="/listwilayahwaspada">
                                <p className="icon-item-menu">
                                    <i className="fas fa-exclamation-circle"></i>
                                </p>
                            </Link>
                        </div>

                        <div className="item-menu">
                            <Link to="/listwilayahsiaga">
                                <p className="icon-item-menu">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </p>
                            </Link>
                        </div>

                        <div className="item-menu">
                            <Link to="/listwilayahbahaya">
                                <p className="icon-item-menu">
                                    <i className="fas fa-skull-crossbones"></i>
                                </p>
                            </Link>
                        </div>

                        <div className="item-menu">
                            <Link to="/adminregister">
                                <p className="icon-item-menu">
                                    <i className="fas fa-user-plus"></i>
                                </p>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSubMenu;