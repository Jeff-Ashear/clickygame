import React from "react";
// import one from "../images/one.jpg";
// import two from "../images/two.jpg";
// import three from "../images/three.jpg";
// import four from "../images/four.jpg";
import five from "../images/five.png";
import six from "../images/six.png";
import seven from "../images/seven.jpg";
import eight from "../images/eight.jpg";
import nine from "../images/nine.jpg";
import ten from "../images/ten.jpg";
// import eleven from "./images/eleven.jpg";
import twelve from "../images/twelve.jpg";
import thirteen from "../images/thirteen.jpg";
import fourteen from "../images/fourteen.jpg";
import fifteen from "../images/fifteen.jpg";
import "./style.css";

class ImageTiles extends React.Component {
  // one  = {
  //   id: 1, 
  //   img: one
  // }
  // two  = {
  //   id: 2, 
  //   img: two
  // }
  // three  = {
  //   id: 3, 
  //   img: three
  // }
  // four = {
  //   id: 4, 
  //   img: four
  // }
  five = {
    id: 5,
    img: five
  }
  six = {
    id: 6,
    img: six
  }
  seven = {
    id: 7,
    img: seven
  }
  eight = {
    id: 8,
    img: eight
  }
  nine = {
    id: 9,
    img: nine
  }
  ten = {
    id: 10,
    img: ten
  }
  // eleven = {
  //   id: 11, 
  //   img: eleven
  // }
  twelve = {
    id: 12,
    img: twelve
  }
  thirteen = {
    id: 13,
    img: thirteen
  }
  fourteen = {
    id: 14,
    img: fourteen
  }
  fifteen = {
    id: 15,
    img: fifteen
  }
  state = {
    tagState: false,
    // this.one, this.two, this.three, this.four,
    pics: [this.five, this.six, this.seven, this.eight, this.nine, this.ten, this.twelve, this.thirteen, this.fourteen, this.fifteen],
    trackClicked: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      12: 0,
      13: 0,
      14: 0,
      15: 0
    }
  };

  clickTheButton = ({ target }) => {
    // var scores = Object.values(this.state.trackClicked) [0, 0, 0, 0 ]
    // var won = true;
    // loop to go through all scores
    // if (scores[i] > 1) => automatically loose => won = false break; => end the game
    // if (scores < 1) => won false => continue the game
    //
    // end of the loop => won = true

    // outside of loop
    // if won == true => they won the game

    var wins = 0;
    var losses = 0;

    var imgsClicked = Object.values(this.state.trackClicked);
    console.log("imgsClicked: ", imgsClicked)

    var won = true;

    // for (k = imgsClicked.length; k > 0; k++) {
    //   if (imgsClicked[k] > 1) {
    //     console.log("You lose man.");
    //     losses++;
    //     console.log("Wins: ", wins);
    //     console.log("Losses: ", losses)
    //   }
    // }


    let { id } = target;

    console.log("The target", id)
    let trackClicked = { ...this.state.trackClicked }
    trackClicked[id] = this.state.trackClicked[id] + 1
    this.setState({
      trackClicked: trackClicked
    }, () => {
      // this.state.pics.sort((a,b)=>{
      //   let rand = Math.random();
      //   return (rand > .50) ? 1 : (rand === 0) ? 0 : -1 ;
      // })
      var picState = this.state.pics;

      var j, x, i;

      for (i = picState.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));  //random number between 0 and i +1.  The further along the the index you get, the further.
        x = picState[i];
        picState[i] = picState[j]; // change the value
        picState[j] = x;
      }
      console.log("The new state is: ", this.state)
    })
  };

  render() {
    return this.state.pics.map((pic) => {
      return (
        <img
          id={pic.id}
          key={pic.id}
          src={pic.img}
          className=""
          alt="logo"
          onClick={this.clickTheButton}
        />
      );
    });
  }
}

export default ImageTiles;