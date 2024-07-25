import { useState } from "react";

function Panel({ data }) {
  const [expandPanel, setExpandPanel] = useState(false);
  return (
    <section className="panel">
      <h3>{data.question}</h3>
      {expandPanel ? (
        <div>
          <p>{data.answer}</p>
          <button onClick={() => setExpandPanel(!expandPanel)}>-</button>
        </div>
      ) : (
        <button onClick={() => setExpandPanel(!expandPanel)}>+</button>
      )}
    </section>
  );
}

export default Panel;
