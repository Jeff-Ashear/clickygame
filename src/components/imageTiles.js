import React from "react";
import one from "../images/one.png";
import two from "../images/two.jpg";
import three from "../images/three.jpg";
import four from "../images/four.jpg";
import five from "../images/five.jpg";
import six from "../images/six.jpg";
import seven from "../images/seven.jpg";
import eight from "../images/eight.jpg";
import nine from "../images/nine.jpg";
import ten from "../images/ten.jpg";
import eleven from "../images/eleven.jpg";
import twelve from "../images/twelve.jpg";
// import thirteen from "../images/thirteen.jpg";
// import fourteen from "../images/fourteen.jpg";
// import fifteen from "../images/fifteen.jpg";
import "./style.css";

let score = 0;
let wins = 0;
let losses = 0;

class ImageTiles extends React.Component {
  one = {
    id: 1,
    img: one
  }
  two = {
    id: 2,
    img: two
  }
  three = {
    id: 3,
    img: three
  }
  four = {
    id: 4,
    img: four
  }
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
  eleven = {
    id: 11,
    img: eleven
  }
  twelve = {
    id: 12,
    img: twelve
  }

  // Object.keys => ['id', 'img']
  // Object.values => [12, '../img_Path.jpg']

  defaultTrackClicked = {

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
    11: 0,
    12: 0

  }

  state = {
    tagState: false,
    // this.one, this.two, this.three, this.four,
    pics: [this.one, this.two, this.three, this.four, this.five, this.six, this.seven, this.eight, this.nine, this.ten, this.eleven, this.twelve],
    trackClicked: this.defaultTrackClicked
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




    let imgsClicked = Object.values(this.state.trackClicked);
    console.log("imgsClicked: ", imgsClicked);




    // for (let k = 0; k < imgsClicked.length; k++) {
    //   console.log("wtf man, ", imgsClicked)
    //   if (imgsClicked[k] > 1) {
    //     won = false;
    //     losses++;
    //     alert("wtf man");
    //     break;
    //   } else if (imgsClicked[k] < 1) {
    //     console.log("Score: ", score);
    //   } 
    // }






    // for (let k = 0; k < imgsClicked.length; k++) {
    //   if (imgsClicked[k] > 0) {
    //     losses++
    //     alert("Sorry you lose. You've won " + wins + " rounds and lost " + losses + ".");
    //     won = false;
    //     break;
    //   } else if (imgsClicked < 1) {
    //     won = false;
    //     console.log("carry on")
    //   } else {
    //     won = true;
    //   }
    // }

    //   if (won === true) {
    //     alert("You win!")
    //   }

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
      trackClicked: trackClicked,
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

      trackClicked = this.state.trackClicked;
      let lost = false;
      let won = true;

      for (i = 0; i < Object.keys(trackClicked).length; i++) {
        if (Object.values(trackClicked)[i] > 1) {
          // they loose here....
          lost = true;
          console.log('You Lose.');
        }

        if (Object.values(trackClicked)[i] != 1) {
          won = false;
        }
      }

      if (lost) {
        losses++;
        score = 0;
        this.setState({ trackClicked: this.defaultTrackClicked });
        // reset trackedClicked state
      } else {
        score++;
        console.log("score: ", score)
      }

      if (won) {
        console.log('YOU WON');
        console.log('score: ', score);
        wins++;
        score = 0;
        this.setState({ trackClicked: this.defaulTrackClicked });
        // reset trackedClicked state
      }



      console.log("The new state is: ", this.state)
      // for (var k = 0; k < this.state.tagState.trackClicked.length; k++) {
      //   if (this.state.tagState.trackClick)
      // }

      // for (k = imgsClicked.length; k > 0; k++) {
      //   if (imgsClicked[k] > 1) {
      //     console.log("You lose man.");
      //     losses++;
      //     console.log("Wins: ", wins);
      //     console.log("Losses: ", losses)
      //   }
      // }




      if (this.state.tagState.trackClicked > 1) {
        console.log("you Lose.")
      }

    });



  };



  render() {
    return (
      <div>
        <header>
          <h1 className="inst">Robots vs Aliens!</h1>
          <h3 className="inst">Click each tile exactly once and you win.  Click any image twice and you lose.</h3><br></br>
          <h2 className="score" id="wins">Wins: {wins} </h2>
          <h2 className="score"id="score">Score: {score} </h2>
          <h2 className="score" id="losses">Losses: {losses} </h2>

        </header>
        <div className="row">
          {this.state.pics.map((pic) => {
            return (
              <div key={pic.id} className="col-3">
                <img
                  id={pic.id}
                  src={pic.img}
                  className=""
                  alt="logo"
                  onClick={this.clickTheButton}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ImageTiles;