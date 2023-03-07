import { useState } from "react";
import "./App.css";
import ShowImage from "./ShowImage";
import CustomButton from "./CustomButton.js";
import CustomMessage from "./CustomMessage";
import { addNewImage, reset, heartIncrease } from "./Constants";

const images = [
  { id: 1, image1: "/assets/lion.jpg", image2: "/assets/heart.jpeg", image2Size: "30" },
  { id: 2, image1: "/assets/deer.jpg", image2: "/assets/heart.jpeg", image2Size: "30" },
  { id: 3, image1: "assets/rhinocerous.jpg", image2: "/assets/heart.jpeg", image2Size: "30" },
  { id: 4, image1: "assets/tiger.jpg", image2: "/assets/heart.jpeg", image2Size: "30" },
  { id: 5, image1: "assets/giraffe.jpg", image2: "/assets/heart.jpeg", image2Size: "30" },
  { id: 6, image1: "assets/elephant.jpg", image2: "/assets/heart.jpeg", image2Size: "30" },
  { id: 7, image1: "assets/sheep.jpg", image2: "/assets/heart.jpeg", image2Size: "30" },
  { id: 8, image1: "assets/panda.jpg", image2: "/assets/heart.jpeg", image2Size: "30" },
  { id: 9, image1: "assets/koala.jpg", image2: "/assets/heart.jpeg", image2Size: "30" },
  { id: 7, image1: "assets/gorilla.jpg", image2: "/assets/heart.jpeg", image2Size: "30" }];

function App() {
  const [state, setState] = useState({ showImages: [], message: "" })
  const addImage = function () {
    if (state.showImages.length === images.length) {
      setState((prevState) => { return { ...prevState, message: "Sorry! No more images in stock. Press reset to start from beginning" } });
      document.getElementById("btn-addNewImage").disabled = true;
    }
    else {
      setState((prevState) => {
        return {
          ...prevState, message: heartIncrease, showImages: [...prevState.showImages, prevState.showImages.length === 0 ? images[0] :
            images[prevState.showImages.length]]
        };
      })
    }
  }
  const increaseHeart = function (id) {
    setState((prevState) => { return { ...prevState, showImages: prevState.showImages.map((showImage) => { return showImage.id === id ? { ...showImage, image2Size: Number(showImage.image2Size) + 10 } : showImage }) } })
  }
  const resetFn = function () {
    setState((prevState) => { return { ...prevState, message: "", showImages: [] } })
    document.getElementById("btn-addNewImage").disabled = false;
  }
  return (
    <section className="animal-gallery">
      <div className="container">
        <h1 className="center">Animal Gallery</h1>
        <CustomButton label={addNewImage} handleClick={addImage} id="btn-addNewImage" />
        <CustomButton label={reset} handleClick={resetFn} />
        <CustomMessage label={state.message} />
        <ul className="d-flex">
          {state.showImages.map((showImage) => <ShowImage key={showImage.id} showImage={showImage} increaseHeart={() => increaseHeart(showImage.id)} />)}
        </ul>
      </div>
    </section>);
}
export default App;