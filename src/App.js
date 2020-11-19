import React, { Component } from "react";
import styled from "styled-components";

import sprite from "./img/sprite.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 90vh;
`;

const Map = styled.div`
  position: relative;
  width: 700px;
  height: 700px;
  background-color: green;
`;

const Person = styled.div`
  position: absolute;
  top: ${(props) => props.position[1]}px;
  left: ${(props) => props.position[0]}px;
  width: 35px;
  height: 35px;

  background: url(${sprite});
  background-position: ${(props) => props.positionPerson};
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: [0, 0],
      positionPerson: "0 0"
    };
  }

  handleUp = (ev) => {
    const { position } = this.state;

    const firstPosition = position[0];
    const secondPosition = position[position.length - 1];

    switch (ev.keyCode) {
      case 38:
      case 87:
        return this.setState({
          position: [
            firstPosition,
            secondPosition > 1 ? secondPosition - 35 : secondPosition
          ],
          positionPerson: "0 -73px"
        });
      case 65:
      case 37:
        return this.setState({
          position: [
            firstPosition > 1 ? firstPosition - 35 : firstPosition,
            secondPosition
          ],
          positionPerson: "0 37px"
        });
      case 40:
      case 83:
        return this.setState({
          position: [
            firstPosition,
            secondPosition > 660 ? secondPosition : secondPosition + 35
          ],
          positionPerson: "0 0"
        });
      case 68:
      case 39:
        return this.setState({
          position: [
            firstPosition > 660 ? firstPosition : firstPosition + 35,
            secondPosition
          ],
          positionPerson: "0 -37px"
        });
      default:
        return 0;
    }
  };

  render() {
    const { position, positionPerson } = this.state;

    return (
      <Container>
        <Map tabIndex="1" onKeyUp={(ev) => this.handleUp(ev)}>
          <Person position={position} positionPerson={positionPerson} />
        </Map>
      </Container>
    );
  }
}

export default App;
