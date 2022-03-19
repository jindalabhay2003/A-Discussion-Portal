
import './App.css';
import Blogs from "./components/Blogs";
import AccountProvider from "./context/AccountProvider";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <AccountProvider>
        <Blogs />
      </AccountProvider>
    </div>
  );
}

export default App;
