import React from "react";
import axios from "axios";
const Fib = () => {
  const [seenIndexes, setSeenIndexes] = React.useState([]);
  const [values, setValues] = React.useState({});
  const [index, setIndex] = React.useState("");
  React.useEffect(() => {
    const fetchValues = async () => {
      const values = await axios.get("/api/values/current");
      setValues(values.data);
    };
    const fetchIndexes = async () => {
      const seenIndexes = await axios.get("/api/values/all");
      setSeenIndexes(seenIndexes.data);
    };
    fetchValues();
    fetchIndexes();
  }, [index]);
  const renderSeenIndexes = () => {
    console.log(seenIndexes);
    return (
      seenIndexes.length !== 0 &&
      seenIndexes.map(({ number }) => number).join(", ")
    );
  };
  const renderValues = () => {
    const entries = [];

    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key} I Caluculated {values[key]}
        </div>
      );
    }
    return entries;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post("api/values", {
      index
    });
    setIndex("");
  };
  console.log(values);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>
        <input value={index} onChange={event => setIndex(event.target.value)} />
        <button>Submit</button>
      </form>
      <h3>Indexes I have seen:</h3>
      {renderSeenIndexes()}
      <h3>Caluculated values:</h3>
      {renderValues()}
    </div>
  );
};

export default Fib;
