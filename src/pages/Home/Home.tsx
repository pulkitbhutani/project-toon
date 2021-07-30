import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { atom, useRecoilState } from "recoil";

import { Project } from "../../models/Project";
import ProjectPage from "../Project/Project";
import { firestore } from "../../firebase";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

import "./Home.scss";

const projectsState = atom<Project[]>({
  key: "projects",
  default: [],
});

function Home() {
  let match = useRouteMatch();
  const [projects, setProjects] = useRecoilState(projectsState);

  useEffect(() => {
    firestore
      .collection("projects")
      .get()
      .then((data) => {
        let projectsArr: Project[] = [];

        data.docs.forEach((doc) => {
          projectsArr.push({ ...doc.data() });
        });

        setProjects(projectsArr);
      });
  }, []);

  return (
    <div className="home-container">
      <h1>Projects</h1>
      <div className="projects-container">
        {projects &&
          projects.map((item: Project, index: number) => {
            const prop = {
              title: item.name,
              description: item.description,
            };

            return (
              <Link to={`${match.url}/project/${item.uid}`}>
                <ProjectCard key={index} {...prop} />
              </Link>
            );
          })}
      </div>
      <Switch>
        <Route path={`${match.path}/project/:projectId`}>
          <ProjectPage />
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
