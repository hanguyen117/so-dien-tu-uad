import Header from "../components/header";
import MenuBar from "../components/menubar";
import ContentArea from "../components/contentarea";
// import "./css.css";
function Homepage() {
  return (
    <>
      <Header />
      <div style={{ display: "flex", gap :"30px" }}>
        <MenuBar />
        <ContentArea />
      </div>      
    </>
  );
}

export default Homepage;