import React, { Fragment, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { toast } from "react-toastify";

// // ----- COMPONENTS ----- // //
import Home from "./pages/home"
import AdminLogin from "./components/admin/adminLogin";
import AdminDashboard from "./components/admin/adminDashboard";
import ListWilayahSiaga from "./components/admin/listWilayahSiaga";
import InputWilayahSiaga from "./components/admin/inputWilayahSiaga";
import ListWilayahWaspada from "./components/admin/listWilayahWaspada";
import InputWilayahWaspada from "./components/admin/inputWilayahWaspada";
import ListWilayahBahaya from "./components/admin/listWilayahBahaya";
import InputWilayahBahaya from "./components/admin/inputWilayahBahaya";
import AdminRegister from "./components/admin/adminRegister";
import InputTugasAdmin from "./components/admin/inputTugasAdmin";
import Disclaimer from "./components/home/Disclaimer";

/*
- toast untuk menampilkan notifikasi - notifikasi pada halaman admin
*/
toast.configure();

function App() {
  /*
  - state untuk autentikasi admin
  */
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /*
  - memeriksa autentikasi pada user yang login
  */
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5555/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  /*
  - membuat proteksi halaman admin, penjelasan di bawah ini;
    <Route
      exact
      path="/admindashboard"                              ---> path url component
      render={props =>                                    ---> melakukan render yang mengambil properti
        isAuthenticated ? (                               ---> memeriksa, apakah mendapatkan autentikasi?
          <AdminDashboard {...props} setAuth={setAuth} /> ---> jika iya, akan berada di halaman tersebutbeserta seluruh properti component
        ) : (
          <Redirect to="/adminlogin" />                   ---> jika tidak mendapatkan autentikasi, kembali ke halaman login
          )
      }
    />
  - untuk halaman login, logika-nya berbeda
  */
  return (
    <Fragment>
      <Router>
        <div>
          <Switch>
            <Route path={'/'} exact component={Home}>
              <Home />
            </Route>
            <Route path={'/disclaimer'} exact component={Disclaimer}>
              <Disclaimer />
            </Route>

            {/* // // ----- ADMIN COMPONENTS ----- // // */}
            <Route
              exact
              path="/adminlogin"
              render={props =>
                !isAuthenticated ? (
                  <AdminLogin {...props} setAuth={setAuth} />
                ) : (
                    <Redirect to="/admindashboard" />
                  )
              }
            />
            <Route
              exact
              path="/admindashboard"
              render={props =>
                isAuthenticated ? (
                  <AdminDashboard {...props} setAuth={setAuth} />
                ) : (
                    <Redirect to="/adminlogin" />
                  )
              }
            />
            <Route
              exact
              path="/adminregister"
              render={props =>
                isAuthenticated ? (
                  <AdminRegister {...props} setAuth={setAuth} />
                ) : (
                    <Redirect to="/adminlogin" />
                  )
              }
            />
            <Route
              exact
              path="/inputtugasadmin"
              render={props =>
                isAuthenticated ? (
                  <InputTugasAdmin {...props} setAuth={setAuth} />
                ) : (
                    <Redirect to="/adminlogin" />
                  )
              }
            />

            {/* // // ----- WILAYAH SIAGA COMPONENTS ----- // // */}
            <Route
              exact
              path="/listwilayahsiaga"
              render={props =>
                isAuthenticated ? (
                  <ListWilayahSiaga {...props} setAuth={setAuth} />
                ) : (
                    <Redirect to="/listwilayahsiaga" />
                  )
              }
            />
            <Route
              exact
              path="/inputwilayahsiaga"
              render={props =>
                isAuthenticated ? (
                  <InputWilayahSiaga {...props} setAuth={setAuth} />
                ) : (
                    <Redirect to="/inputwilayahsiaga" />
                  )
              }
            />

            {/* // // ----- WILAYAH WASPADA COMPONENTS ----- // // */}
            <Route
              exact
              path="/listwilayahwaspada"
              render={props =>
                isAuthenticated ? (
                  <ListWilayahWaspada {...props} setAuth={setAuth} />
                ) : (
                    <Redirect to="/listwilayahwaspada" />
                  )
              }
            />
            <Route
              exact
              path="/inputwilayahwaspada"
              render={props =>
                isAuthenticated ? (
                  <InputWilayahWaspada {...props} setAuth={setAuth} />
                ) : (
                    <Redirect to="/inputwilayahwaspada" />
                  )
              }
            />

            {/* // // ----- WILAYAH BAHAYA COMPONENTS ----- // // */}
            <Route
              exact
              path="/listwilayahbahaya"
              render={props =>
                isAuthenticated ? (
                  <ListWilayahBahaya {...props} setAuth={setAuth} />
                ) : (
                    <Redirect to="/listwilayahbahaya" />
                  )
              }
            />
            <Route
              exact
              path="/inputwilayahbahaya"
              render={props =>
                isAuthenticated ? (
                  <InputWilayahBahaya {...props} setAuth={setAuth} />
                ) : (
                    <Redirect to="/inputwilayahbahaya" />
                  )
              }
            />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;