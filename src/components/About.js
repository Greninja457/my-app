import React from "react";

export default function About() {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#343a40",
        height: "85vh",
        color: "white",
        padding: "40px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: "20px", fontSize: "36px", fontWeight: "600" }}>
        About TextUtils
      </h1>
      <p style={{ fontSize: "18px", textAlign: "center", maxWidth: "600px" }}>
        TextUtils is a powerful and user-friendly web application designed to
        help you manipulate, format, and analyze text effortlessly. Whether you
        want to convert your text to uppercase, lowercase, remove extra spaces,
        or perform any other text transformation, TextUtils makes it quick and
        easy.
      </p>
      <p style={{ fontSize: "18px", textAlign: "center", maxWidth: "600px" }}>
        Our goal is to provide a clean, intuitive interface that allows you to
        focus on your writing without worrying about formatting issues. Whether
        you're a writer, student, or developer, TextUtils can be your go-to tool
        for all your text-related tasks.
      </p>
      <div style={{ marginTop: "40px", fontSize: "16px", textAlign: "center" }}>
        <strong>Created by:</strong> Your Name
      </div>
    </div>
  );
}
