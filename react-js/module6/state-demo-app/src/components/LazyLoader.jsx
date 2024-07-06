import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
function LazyLoader() {
  //applied pre lazy loader
  const [loader, setLoader] = useState(true);
  // counter app
  const [count, setCount] = useState(0);

  // print multiple name
  const [name, setName] = useState({
    name1: "brijesh",
    name2: "rajesh",
  });

  // create a function for update on single button
  const updData = () => {
    setName({
      name1: "rageshri",
      name2: "Ridhi",
    });
  };

  // applied useEffect for setting loader load timming
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4000);
  });
  return (
    <>
      {loader ? (
        <div className="container lazy-loader w-50 mx-auto mt-5 text-center">
          <div
            className="spinner-grow text-primary"
            style={{ width: "6rem", height: "6rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div
            className="spinner-grow text-secondary"
            style={{ width: "6rem", height: "6rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div
            className="spinner-grow text-success"
            style={{ width: "6rem", height: "6rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div
            className="spinner-grow text-danger"
            style={{ width: "6rem", height: "6rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div
            className="spinner-grow text-warning"
            style={{ width: "6rem", height: "6rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Container className="p-5 mt-5 w-50 max-auto shadow">
          <h2 className="text-center">Counter App </h2>
          <hr className="border border-dark w-25 mx-auto" />

          {/* display a counter values */}

          <h2 className="text-center">Counter app value is : {count} </h2>

          <p className="text-center">
            <button
              type="button"
              className="btn btn-md btn-success bg-success text-white fs-3"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-md btn-danger ms-3 bg-danger text-white fs-3"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </button>
          </p>

          <hr />

          {/* update multiple name */}
          <div className="p-5 w-75 mx-auto">
            <p className="fs-2 text-center">name is :{name.name1}</p>
            <p className="fs-2 text-center">name is :{name.name2}</p>
            <p className="text-center">
              <button
                type="button"
                className="btn btn-md bg-danger text-white"
                onClick={updData}
              >
                Update Name
              </button>
            </p>
          </div>
        </Container>
      )}
    </>
  );
}

export default LazyLoader;
