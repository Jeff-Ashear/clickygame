import React, { Component } from "react";
// import logo from './logo.svg';
// import one from "./images/one.jpg";
// import two from "./images/two.jpg";
// import three from "./images/three.jpg";
// import four from "./images/four.jpg";
// import five from "./images/five.png";
// import six from "./images/six.png";
// import seven from "./images/seven.jpg";
// import eight from "./images/eight.jpg";
// import nine from "./images/nine.jpg";
// import ten from "./images/ten.jpg";
// // import eleven from "./images/eleven.jpg";
// import twelve from "./images/twelve.jpg";
// import thirteen from "./images/thirteen.jpg";
// import fourteen from "./images/fourteen.jpg";
// import fifteen from "./images/fifteen.jpg";
import ImageTiles from "./components/imageTiles.js";
import "./App.css";



class App extends Component {
//   one  = {
//     id: 1, 
//     img: one
//   }
//   two  = {
//     id: 2, 
//     img: two
//   }
//   three  = {
//     id: 3, 
//     img: three
//   }
//   four = {
//     id: 4, 
//     img: four
//   }
//   five = {
//     id: 5, 
//     img: five
//   }
//   six = {
//     id: 6, 
//     img: six
//   }
//   seven = {
//     id: 7, 
//     img: seven
//   }
//   eight = {
//     id: 8, 
//     img: eight
//   }
//   nine = {
//     id: 9, 
//     img: nine
//   }
//   ten = {
//     id: 10, 
//     img: ten
//   }
//   // eleven = {
//   //   id: 11, 
//   //   img: eleven
//   // }
//   twelve = {
//     id: 12, 
//     img: twelve
//   }
//   thirteen = {
//     id: 13, 
//     img: thirteen
//   }
//   fourteen = {
//     id: 14, 
//     img: fourteen
//   }
//   fifteen = {
//     id: 15, 
//     img: fifteen
//   }
//   state = {
//     tagState: false,
//     pics: [this.one, this.two, this.three, this.four, this.five, this.six, this.seven, this.eight, this.nine, this.ten, this.twelve, this.thirteen, this.fourteen, this.fifteen],
//     trackClicked: {
//       1: 0,
//       2: 0, 
//       3: 0, 
//       4: 0,
//       5: 0,
//       6: 0,
//       7: 0,
//       8: 0,
//       9: 0,
//       10: 0,
//       12: 0,
//       13: 0,
//       14: 0,
//       15: 0
//     }
//   };

  render() {
    return (
      <div>
      <ImageTiles />
      </div>
    );
  }
}

export default App;
