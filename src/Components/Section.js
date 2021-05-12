/**
 * Section : 무언가 안에 관련 컨텐츠들을 나열해주는 js file (예: Upcoming Movies Section 안에 관련 영화들)
 */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
//마지막 children에게 margin-bottom을 주고 싶지 않을 때 :not(:last-child) {}
const Container = styled.div`
    :not(:last-child) {
    margin-bottom: 50px;
    }
`;

const Title = styled.span`
    font-size: 14px;
    font-weight: 600;
`;

const Grid = styled.div`
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 125px);
    grid-gap: 25px;
`;

const Section = ({ title, children }) => (
    <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </Container>
);

Section.propTypes = {
    title:PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Section;