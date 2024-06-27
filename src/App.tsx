import { useState } from "react";

function App() {
  const [bug, setBug] = useState([
    {
      id: 1,
      title: "bug1",
      fixed: false,
    },
    {
      id: 2,
      title: "bug2",
      fixed: false,
    },
  ]);

  const handleClick = () => {
    setBug(bug.map((b) => (b.id === 1 ? { ...b, fixed: true } : b)));
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
