import React, { Fragment, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Webcam from "react-webcam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Verify = () => {
  const [faceDetected, setFaceDetected] = useState(false);
  const [micDetected, setMicDetected] = useState(false);
  const [checkMic, setCheckMic] = useState(true);
  const { id } = useParams();

  // Temporary face detection for demo because of time 😞
  setTimeout(function () {
    setFaceDetected(true);
  }, 2000);

  setTimeout(function () {
    setMicDetected(true);
  }, 5000);

  return (
    <Fragment>
      {checkMic ? (
        <section className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title has-text-primary">Camera Verification</h1>
              <br />
              <Webcam width={280} />
              <br />

              <h3 class="title is-5">{faceDetected ? "Face Detected!" : ""}</h3>
              <br />
              <button
                className={`button is-primary ${
                  faceDetected ? "" : "is-loading"
                }`}
                onClick={() => {
                  setCheckMic(false);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title has-text-primary">Verify Microphone</h1>
              <br />
              <FontAwesomeIcon icon="microphone" size="6x" />
              <br />
              <br />
              <h3 class="title is-5">{micDetected ? "Mic Verified!" : ""}</h3>
              <br />
              <Link to={`/exam/${id}`}>
                <button
                  className={`button is-primary ${
                    micDetected ? "" : "is-loading"
                  }`}
                >
                  Next
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default Verify;
