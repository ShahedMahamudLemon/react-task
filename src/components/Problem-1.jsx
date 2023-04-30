import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [jsonArray, setJsonArray] = useState([]);
  const [dataState, setDataState] = useState(0);
  const [activeUser, setActiveUser] = useState([]);
  const [activeState, setActiveState] = useState(0);
  // //   let jsonArray = [];
  //   let dataState = 0;
  const handleClick = (val) => {
    setShow(val);
    if (val === "active") {
      setDataState(0);
      setActiveState(1);
      setActiveUser(jsonArray.filter((arrEl) => arrEl.status === "Active"));
    } else if (val === "all") {
      setDataState(1);
      setActiveState(0);
    } else if (val === "completed") {
      setDataState(0);
      setActiveState(1);
      setActiveUser(jsonArray.filter((arrEl) => arrEl.status === "Completed"));
    }
  };
  const submitData = () => {
    const getName = document.getElementById("nameField").value;
    const getStatus = document.getElementById("statusField").value;
    const jsonObject = {
      name: getName,
      status: getStatus,
    };
    setJsonArray([...jsonArray, jsonObject]);
    setDataState(1);
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form className="row gy-2 gx-3 align-items-center mb-4">
            <div className="col-auto">
              <input
                type="text"
                id="nameField"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                id="statusField"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button
                type="button"
                onClick={() => {
                  submitData();
                }}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {dataState === 1 &&
                jsonArray.map((arrEl, index) => {
                  return (
                    <tr key={index}>
                      <td>{arrEl.name}</td>
                      <td scope="col">{arrEl.status}</td>
                    </tr>
                  );
                })}
              {activeState === 1 &&
                activeUser.map((arrEl, index) => {
                  return (
                    <tr key={index}>
                      <td>{arrEl.name}</td>
                      <td scope="col">{arrEl.status}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
