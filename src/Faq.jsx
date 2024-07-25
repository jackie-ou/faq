import json from "./database.json";
import Panel from "./Panel";

function Faq() {
  const database = json;
  const dataArray = Object.values(database);

  return (
    <>
      {dataArray.map((data) => (
        <Panel data={data} />
      ))}
    </>
  );
}

export default Faq;
