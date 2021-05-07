/**
 * 해당 사이트의 폰트를 설정. Global -> 모든 페이지에 적용
 */
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
//어떤 컴포넌트들에 스타일을 넣지 않고 Global한 웹사이트(전체)에 스타일을 넣어줌 -> Default 스타일을 추가
const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        background-color:rgba(20, 20, 20, 1);
        color:white;
        padding-top:50px;
    }
`;

export default globalStyles;