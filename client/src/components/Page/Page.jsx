import React from "react";
// Style(s)
import "./page.scss";

function Page(props) {
  return (
    <main className="page-container">
      { props.children }
    </main>
  );
}

export default Page;