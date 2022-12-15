import "./style.css"

import AboutScrollerText from "./components/AboutScroll";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageScrollerOptions from "./components/PageScrollerOptions";
import PageScrollerText from "./components/PageScrollerText";
import Tag from "./components/TAG";
import Thumbnail from "./components/Thumb";

export default function App(){
  return <div>
      <Header /><br />
      <Tag name={"test"}/> <br />
      <Thumbnail text={"Ceci est un test"} /> <br />
      <PageScrollerOptions name={"Equipement"} options={["Test 1", "Test 2", "Test 3"]}/><br />
      <PageScrollerText name={"Description"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} /><br />
      <AboutScrollerText name={"Test"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} /><br />
      <Footer />
    </div>
}