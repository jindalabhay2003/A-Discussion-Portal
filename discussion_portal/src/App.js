
import './App.css';
import Blogs from "./components/Blogs";
import AccountProvider from "./context/AccountProvider";

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
