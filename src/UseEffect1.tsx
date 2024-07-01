import React, { useEffect, useRef } from "react";

const App2 = () => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  });
  useEffect(() => {
    document.title = "Hello";
  });
  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
};

export default App2;
