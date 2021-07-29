import React, { useEffect, useState } from "react";
import { Project } from "../../models/Project";
import { firestore } from "../../firebase";

function Home() {
  const initialProjectsArr: Project[] = [];
  const [projects, setProjects] = useState(initialProjectsArr);

  useEffect(() => {
    firestore
      .collection("projects")
      .get()
      .then((data) => {
        let projectsArr: Project[] = [];

        data.docs.map((doc) => {
          projectsArr.push({ ...doc.data() });
        });
        console.log(projectsArr);
        setProjects(projectsArr);
      });
  }, []);

  return (
    <div>
      <h2>Project Based Learning For Maths</h2>
      <h3>Project List</h3>

      {projects &&
        projects.map((item, index) => {
          return <p key={index}>{item.name}</p>;
        })}
    </div>
  );
}

export default Home;
