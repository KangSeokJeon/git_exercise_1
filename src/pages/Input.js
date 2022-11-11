import React, { useState } from "react";

const Input = () => {
  const [txtValue, setTextvalue] = useState(""); // 0은 기본값

  const onChange = (e) => {
    setTextvalue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={txtValue} onChange={onChange} />
      <br />
      <p>{txtValue}</p>
    </div>
  );
};

export default Input;
