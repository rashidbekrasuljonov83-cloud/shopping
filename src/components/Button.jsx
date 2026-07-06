import React from "react";

function Button({ text, onClick, variant }) {
  let variants = {
    neutral: "btn btn-neutral",
    accent: " btn btn-accent",
  };
  return (
    <button className={`${variants[variant]} btn w-full`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
{
  /* <button className="btn btn-primary">Primary</button>
  <button className="btn btn-neutral">Neutral</button>;
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-info">Info</button>
<button className="btn btn-success">Success</button>
<button className="btn btn-warning">Warning</button>
<button className="btn btn-error">Error</button> */
}
