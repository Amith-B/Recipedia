import React, { useState } from "react";
import "./Topbar.css";
import logo from "../assets/appicon.png";
import { Link, Route, Switch } from "react-router-dom";
import Recipe from "./Recipe";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import About from "./About";

function Topbar(props) {
  const clsNames = [
    "container",
    "containerHor",
    "containerVer",
    "containerCircle",
  ];
  const [cls, setCls] = useState(clsNames[0]);
  const [searchClass, setSearchClass] = useState("searchInput");
  const [searchString, setSearchString] = useState("");
  const [onSearch, setOnSearch] = useState(false);
  return (
    <div className={cls}>
      <div className={"transperant"}>
        <div className={"headernav"}>
          <div className={"title"}>
            <i className="appicon">
              <img
                className={"appicon"}
                src={logo}
                alt={"appicon"}
                width="40px"
                height="40px"
              />
            </i>
            <Link
              to="/"
              style={{
                transform: "translateY(-5px)",
              }}
              className="link"
            >
              Recipedia
            </Link>
          </div>
          <span>
            <input
              onChange={(e) => setSearchString(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") setOnSearch(true);
              }}
              value={searchString}
              className={searchClass}
              type="text"
              placeholder="search"
            />
          </span>
          <div className={"nav"}>
            <div className={"home"}>
              <Link to="/" className="link">
                Home
              </Link>
            </div>
            <div className={"recipes"}>
              <Link to="/recipe" className="link">
                Recipes
              </Link>
            </div>
            <div className={"recipes"}>
              <Link to="/about" className="link">
                About
              </Link>
            </div>
            {/* <div className={"user"}>
              <Link
                to="/login"
                className="link lr"
                style={{ fontSize: ".7em" }}
              >
                Login/Register
              </Link>
            </div> */}
          </div>
        </div>

        <Switch>
          {/* <Route path="/recipe" component={Recipe} /> */}
          <Route
            path="/recipe"
            render={(props) => (
              <Recipe
                {...props}
                search={searchString}
                setSearchString={setSearchString}
                onSearch={onSearch}
                setOnSearch={setOnSearch}
                showSearch={() => setSearchClass("searchInputShow")}
                transition={() => setCls(clsNames[1])}
              />
            )}
          />
          <Route
            path="/about"
            render={(props) => (
              <About
                {...props}
                hideSearch={() => setSearchClass("searchInput")}
                transition={() => setCls(clsNames[3])}
              />
            )}
          />
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} transition={() => setCls(clsNames[2])} />
            )}
          />

          <Route
            path="/register"
            render={(props) => (
              <Register {...props} transition={() => setCls(clsNames[2])} />
            )}
          />

          <Route
            path="/"
            render={(props) => (
              <Home
                {...props}
                hideSearch={() => setSearchClass("searchInput")}
                transition={() => setCls(clsNames[0])}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default Topbar;
