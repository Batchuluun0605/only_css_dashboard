import Content from "./layout/Content/Content";
import Sidebar from "./layout/Sidebar/Sidebar";
import logo from "./logo.svg";

function App() {
  return (
    <div className="app">
      <div>
        <Sidebar />
      </div>
      <Content />
    </div>
  );
}

export default App;
