// import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const imageUrl =
//   "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
// const productPrice = 10.99;

// const product = (
//   <>
//     <img src={imageUrl} alt="Tacos With Lime" width="640" />
//     <h2>Tacos With Lime</h2>
//     <p>Price: {productPrice}$</p>
//     <button type="button">Add to cart</button>
//   </>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(product);

// const element = React.createElement("div", {
//   a: 6,
//   b: 10,
//   children: "Привіт, світ",
// });
// console.log("element:::", element);

// ReactDOM.render(element, document.querySelector("#root"));

///////////////////////////
// const elem1 = <span>Привіт</span>;
// const elem2 = <span>, світ</span>;
// const jsxElement = (
//   <div>
//     {elem1}
//     {2 + 2}
//     {elem2}
//   </div>
// );

// // ReactDOM.render(jsxElement, document.querySelector("#root"));
// ReactDOM.createRoot(document.getElementById("root")).render(jsxElement);

////////////////////////

function Element(props) {
  console.log("Element >> props:::", props);
  return (
    <div>
      <span>Привіт</span>;<span>, світ</span>;<p>Autor:</p>
    </div>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(
  <Element a="5" b={10} />,
);
/////////////////////////

// const Product = props => (
//   <>
//     <img
//       src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       alt="Tacos With Lime"
//       width="640"
//     />
//     <h2>Tacos With Lime</h2>
//     <p>Price: 10.99$</p>
//     <button type="button">Add to cart</button>
//   </>
// );

// // У розмітці компонент записується як JSX-тег
// ReactDOM.createRoot(document.getElementById("root")).render(<Product />);
