import Content from "./layout/Content/Content";
import Sidebar from "./layout/Sidebar/Sidebar";
import logo from "./logo.svg";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
