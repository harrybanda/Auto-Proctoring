import React, { Fragment, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Question from "../components/Question";
import axios from "axios";

const Exam = () => {
  let history = useHistory();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [loadingSend, setLoadingSend] = useState(false);
  const [studentAns, setStudentAns] = useState([]);
  const [marks, setMarks] = useState(50);
  const [questions, setQuestions] = useState([
    {
      id: 0,
      question: "What was the first Network called?",
      correct: "d",
      answers: [
        { ans: "CNNET", val: "a" },
        { ans: "NSFNET", val: "b" },
        { ans: "ASAPNET", val: "c" },
        { ans: "ARPANET", val: "d" },
      ],
    },
    {
      id: 1,
      question:
        "Which address is used in an internet employing the TCP/IP protocols?",
      correct: "d",
      answers: [
        { ans: "physical address and logical address", val: "a" },
        { ans: "port address", val: "b" },
        { ans: "specific address", val: "c" },
        { ans: "all of the mentioned", val: "d" },
      ],
    },
  ]);

  const getCandidate = () => {
    var regex = /(ca)(\D*)(\d+)/i;
    var string = id;
    var matches = string.match(regex);
    return matches[3];
  };

  const getExam = () => {
    var regex = /(?<=ex.*)[0-9]/;
    var string = id;
    var matches = string.match(regex);
    return matches[0];
  };

  return (
    <Fragment>
      <section className="hero has-background-light">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title has-text-primary">Computer Networks Exam</h1>
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
                  Candidate: Harry Banda
                </h2>
                <h2 className="subtitle has-text-centered">Durations: 30min</h2>
                <h2 className="subtitle has-text-centered">Marks: 100</h2>
              </div>
            </div>
          </div>
        </div>
        {questions.map((item) => (
          <div>
            <Question
              key={item.id}
              id={item.id}
              question={item.question}
              answers={item.answers}
              studentAns={studentAns}
              setStudentAns={setStudentAns}
            />
            <br />
          </div>
        ))}
        <div style={{ paddingLeft: "300px", paddingRight: "300px" }}>
          <button
            className={`button is-info is-fullwidth ${
              loading || loadingSend ? "is-loading" : ""
            }`}
            onClick={() => {
              setLoadingSend(true);
              axios
                .post(ENDPOINT, {
                  trustScore: 70,
                  marks: 100,
                  examId: getExam(),
                  noOfViolations: 2,
                  candidateId: getCandidate(),
                  results: "",
                  sessionRecording: "",
                  violationProof: "",
                })
                .then(function (response) {
                  console.log(response);
                  setLoading(false);
                  history.push(`/examover/${id}`);
                })
                .catch(function (error) {
                  console.log(error);
                  setLoading(false);
                });
            }}
          >
            Submit Exam
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>
    </Fragment>
  );
};

export default Exam;
