import { Route, Switch } from "react-router-dom";

import AllMeetUps from "./pages/AllMeetUps";
import Favorite from "./pages/Favorites";
import NewMeetUps from "./pages/NewMeetUps";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUps />
        </Route>

        <Route path="/allmeetup">
          <AllMeetUps />
        </Route>

        <Route path="/favorite">
          <Favorite />
        </Route>
        <Route path="/new">
          <NewMeetUps />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
