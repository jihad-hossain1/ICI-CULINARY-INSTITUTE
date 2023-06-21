import React from "react";
import useEnrollClass from "../../../hook/useEnrollClass";

const EnrollClass = () => {
  const [payment, refetch] = useEnrollClass();
  console.log(payment);
  return <div>enroll class</div>;
};

export default EnrollClass;
