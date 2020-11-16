import React from "react";
import { useParams } from "react-router-dom";

const Submit = () => {
  let { id } = useParams();
  return <div>Submit ID: {id}</div>;
};

export default Submit;
