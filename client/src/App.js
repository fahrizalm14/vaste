import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import ButtonTutorial from "./Components/ButtonTutorial";
import Favicon from "react-favicon";
import favicon from "./Images/favicon.ico";

function App() {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 980,
        padding: "1rem",
      }}
      className="App"
    >
      <Favicon url={favicon}></Favicon>
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
      <ButtonTutorial></ButtonTutorial>
    </div>
  );
}

export default App;
