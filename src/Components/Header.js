/**
 * 상단부를 구성해주는 header
 */
import React from "react";
// Link : 해당 페이지가 내 application에 있으면 javascript 방식으로 가게 해줌
// withRouter : 다른 컴포넌트를 감싸는 컴포넌트. Router에 어떤 정보를 줌 -> 어떤 컴포넌트와도 연결할 수 있음
import { Link, withRouter } from "react-router-dom";
//Styled-components : 이 컴포넌트에서만 작동하는 css를 원할 때, 다른 곳에 영향을 주지 않아야 할 때 사용
import styled from "styled-components";
//Styled-components
const Header = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
//Styled-components
const List = styled.ul`
    display:flex;
`;
//Styled-components
//Header가 withRouter란 컴포넌트를 감싼 형태이기 때문에 props를 가질 수 있음
const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    border-bottom: 2.5px solid 
        ${props => props.current ? "#3498db" : "transparent"};
    transition:border-bottom .5s ease-in-out;
`;
//Styled-components
// a tag는 쓰고 싶지 않을 때 Link로 스타일을 주면서 사용
const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
//withRouter 사용 : header가 어떤 Route에 있는지 알게 함
export default withRouter(({ location: { pathname } }) => (
    <Header>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item current={pathname === "/tv"}>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item current={pathname === "/search"}>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </Header>
));