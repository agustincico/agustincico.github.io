import React from "react";

const divStyle = {
  color: "black",
};

function PageNotFound() {
  return (
    <div style={divStyle}>
      <h2>Page Not Found</h2>
      <main>
        <p>Redirecting to home...</p>
      </main>
    </div>
  );
}

export default PageNotFound;
