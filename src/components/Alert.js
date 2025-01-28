import React from "react";

export default function Alert({ alert }) {
  return (
    alert && (
      <div
        className="alert alert-primary my-3 mx-2"
        role="alert"
        style={{ transition: "2s" }}
      >
        <strong>{alert.type}</strong>: {alert.message}
      </div>
    )
  );
}
