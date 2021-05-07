/**
 * 컴포넌트 묶음이자 페이지들을 구성해주는 React Router 파일
 */
import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
//HashRouter : 페이지의 Hash를 사용. url이 좀 난잡해 보임. 앱처럼 보임. 
//BrowserRouter : url이 웹사이트처럼 보이고 url이 이쁨. 두 라우터는 취향 차이. 보안상으론 browser쪽이 좋음.
import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from "Components/Header";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
 //path : 어느 URL에서 해당 Route를 render할지 알려줌
 //Router는 오직 하나의 child만 가질 수 있음 = Router는 오직 하나의 Route만 Render하게 해줌(Router안에 Route와 Redirect 두가지를 사용 못함)
 //두개 이상을 Render하려면 Switch를 사용해 "한번에 오직 하나의 Route만 Render"하게 해줌(Router안에 Route와 Redirect를 번갈아 쓸 수 있게 해줌)
 //Redirect : 일치하는 Route가 하나도 없다면 어느 페이지든 받아서 to에 쓴 대로 보내줌. 여기선 이상한 url로 갈 시 home으로 Redirect시켜줌
 //exact : 해당 path와 정확히 일치할 때만 해당 컴포넌트로 render됌
export default () => (
  <Router>
    <>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/show/:id" component={Detail} />
      <Redirect from="*" to="/" />
    </Switch>
    </>
  </Router>
);