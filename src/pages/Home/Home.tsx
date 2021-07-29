import React, { useEffect } from "react";
import fire from "../../fire";

function Home() {
  /* useEffect(() => {
    fire
      .firestore()
      .collection("projects")
      .get()
      .then((res) => {
        console.log(res);
      });
  }, []); */

  return (
    <div>
      <h2>Project Based Learning For Maths</h2>
    </div>
  );
}

export default Home;
