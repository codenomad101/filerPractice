import { useState } from "react";
import "./App.css";
import { Users } from "./users";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");
  // value: [value, setValue]

  return (
    <>
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <ul className="list" style={{ listStyleType: "none" }}>
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => {
          return <li key={user.id}>{user.first_name}</li>;
        })}
      </ul> */}
      <Table data={Users} query={query} />
    </>
  );
}

export default App;
