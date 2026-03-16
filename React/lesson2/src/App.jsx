import React, { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState("Dumbuls");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (refresh) {
      setState("Nurmuxammad odamga oxshab doskaga qarab o‘tiring");
    }
  }, [refresh]);

  const nextItem = () => {
    setRefresh(true);
  };

  return (
    <>
      <div>{state}</div>
      <button onClick={nextItem}>Click</button>
    </>
  );
}

export default App;
