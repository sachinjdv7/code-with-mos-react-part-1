import { useState } from "react";

function App() {
  const [tag, setTag] = useState(["sachin", "nitin"]);

  const handleClick = () => {
    // Add
    setTag([...tag, "suyash"]);
    // remove
    setTag(tag.filter((t) => t !== "sachin"));

    // udpate
    setTag(tag.map((t) => (t === "nitin" ? "vipul" : t)));
  };
  return (
    <div>
      {tag[3]}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
