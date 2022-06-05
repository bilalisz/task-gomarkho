import Login from "./views/login";
import { BrowserRouter, withRouter, Switch, Route } from "react-router-dom";
import Home from "./views/home";

function App() {
  return (
    <BrowserRouter>
      {/* <Switch> */}
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      {/* </Switch> */}
    </BrowserRouter>
  );
}

export default App;
