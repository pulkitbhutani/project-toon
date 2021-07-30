import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import Home from "./pages/Home/Home";
import MyProjects from "./pages/MyProjects/MyProjects";
import Settings from "./pages/Settings/Settings";
import Submissions from "./pages/Submissions/Submissions";
import Header from "./shared/layout/Header/Header";
import Sidebar from "./shared/layout/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Sidebar />
        <main className="App">
          <Switch>
            <Route path="/projects">
              <MyProjects />
            </Route>
            <Route path="/submissions">
              <Submissions />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
