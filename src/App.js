import "./styles.css";
import Carousel from "./Components/Carousel";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function App() {
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    axios.get("https://demo5110359.mockable.io/images").then((data) => {
      setImageData(data.data.images);
    });
  }, []);
  return <Carousel slides={imageData} />;
}
