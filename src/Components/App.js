import React, { Component } from "react"; 
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";
//Fragments(<></>) : 두개의 컴포넌트를 return할 수 없는 React의 규칙이 있는데 <></>를 사용해 원하는 만큼 컴포넌트를 return할 수 있게 해줌
class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;