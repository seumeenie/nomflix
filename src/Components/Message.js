import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: ${props => props.color};
`;
//Arrow Function : => 다음에 {}중괄호를 쓰지 않으면 "return을 쓰지 않아도 return이 함축되어있음"(중괄호를 하면 그 안 어딘가에서 return을 쓰겠다는걸 의미)
//Arrow Function은 이벤트들을 추가하거나 Function을 Anonymous Function으로 만드는데 쓰임
const Message = ({ text, color }) => (
    <Container>
      <Text color={color}>{text}</Text>
    </Container>
  );
  
Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Message;