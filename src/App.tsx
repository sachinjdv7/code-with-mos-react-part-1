import ListGroup from "./components/ListGroup";

function App() {
  let items = ["pune", "mumbai", "latur", "Nashik"];

  const handleClick = (item: string) => {
    console.log(item);
  };

  return (
    <ListGroup items={items} heading="Cities" onSelectItem={handleClick} />
  );
}

export default App;
