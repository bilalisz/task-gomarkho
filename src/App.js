import Login from "./views/login";
import { BrowserRouter, withRouter, Switch, Route } from "react-router-dom";
import Home from "./views/home";
import storage from "./common/api/storage";
import { useDispatch } from "react-redux";
import { alreadyLogin } from "./Redux/Actions/login.action";

function App() {
  const token = storage.get("token");
  const dispatch = useDispatch();
  if (token) {
    dispatch(
      alreadyLogin({
        isLogging: false,
        isAuthenticated: true,
        user: storage.get("user"),
      })
    );
  }
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default App;
