import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
    render() {
        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>Build</b> a login/auth app with the{" "}
                            <span style={{ fontFamily: "monospace" }}>MERN</span> stack
            </h4>
                        <p className="flow-text grey-text text-darken-1">
                            Mun Jong Hyok
            </p>
                        <br />
                        <div className="col s6">
                            <Link
                                to="/register"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="bg-primary rounded text-white text-center p-3"
                            >
                                Register
              </Link>
                        </div>
                        <div className="col s6">
                            <Link
                                to="/login"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="bg-primary rounded text-white text-center p-3"
                            >
                                Log In
              </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Landing;