import "./styles.css";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { MainPage } from "./MainPage";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="component">
        <SideBar />
        <MainPage />
      </div>
    </div>
  );
}
