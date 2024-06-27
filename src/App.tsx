import { useState } from "react";
import produce from "immer";

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
    // setBug(bug.map((b) => (b.id === 1 ? { ...b, fixed: true } : b)));
    setBug(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };
  return (
    <div>
      {bug.map((b) => (
        <p key={b.id}>
          {b.title} {b.fixed ? "fixed" : "new"}
        </p>
      ))}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
