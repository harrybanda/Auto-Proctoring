import React, { Fragment } from "react";

const ExamOver = () => {
  return (
    <Fragment>
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title has-text-primary">
              Thank you for taking part in the exam.
            </h1>
            <br />
            <div style={{ width: "100%" }}>
              <div
                style={{
                  wordWrap: "break-word",
                  width: "400px",
                  display: "table",
                  margin: "0 auto",
                }}
              >
                <h2 className="subtitle has-text-centered">
                  You will be notified via Email once the results are approved.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ExamOver;
