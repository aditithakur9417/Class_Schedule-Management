import React, { useEffect, useState } from "react";

function CountDown() {
  var randNum = Math.floor(Math.random() * 31) + 30;
  const [countValue, setCountValue] = useState(randNum);

  useEffect(() => {
    const Timeout = setTimeout(() => setCountValue(countValue - 1), 1000);
    if (countValue == 0) {
      clearTimeout(Timeout);
    }
  }, [countValue]);
  return (
    <>
      {countValue}
    </>
  );
}

export default CountDown;
