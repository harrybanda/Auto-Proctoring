import React from "react";
const Question = (props) => {
  const { id, question, answers, studentAns, setStudentAns } = props;

  const onChangeValue = (event) => {
    setStudentAns([
      ...studentAns,
      { question: id, chosenAns: event.target.value },
    ]);
  };

  return (
    <div style={{ paddingLeft: "200px", paddingRight: "200px" }}>
      <div class="box">
        <h2 className="subtitle">
          <b>Q{id + 1}.</b> {question}
          <br />
          <br />
          {answers.map((ans) => (
            <div class="control">
              <label class="radio" onChange={onChangeValue}>
                <input type="radio" name={id} value={ans.val} /> {ans.ans}
              </label>
              <br />
              <br />
            </div>
          ))}
        </h2>
      </div>
    </div>
  );
};

export default Question;
