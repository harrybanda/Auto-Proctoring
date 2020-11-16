import React, { Fragment, useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [exam, setExam] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post(ENDPOINT, {
        name: name,
        email: email,
        dob: dob,
      })
      .then(function (response) {
        console.log(response);
        axios
          .post(ENDPOINT, {
            candidate: 43,
            exam: 1,
          })
          .then(function (response) {
            console.log(response);
            setLoading(false);
            alert("Done!");
          })
          .catch(function (error) {
            console.log(error);
            setLoading(false);
          });
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <Fragment>
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title has-text-primary">
              Welcome to Auto Proctoring
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
                  Please enter your details and select the exam you want to
                  take. You will receive an email once your request is approved.
                </h2>

                <form onSubmit={handleSubmit}>
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        type="date"
                        placeholder="Date of Birth"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div class="control is-fullwidth">
                    <div class="select is-fullwidth">
                      <select
                        required
                        onChange={(e) => setExam(e.target.value)}
                        value={exam}
                      >
                        <option value="">Select an Exam</option>
                        <option value="0">Computer Networks</option>
                        <option value="1">Web Development</option>
                      </select>
                    </div>
                  </div>
                  <br />
                  <button
                    className={`button is-primary is-fullwidth ${
                      loading ? "is-loading" : ""
                    }`}
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Register;
