import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;
//폼을 만들고 onSubmit 호출 = handleSubmit 호출하기 위함
const SearchPresenter = ({
    movieResults, 
    tvResults, 
    loading, 
    searchTerm,
    handleSubmit, 
    error,
    updateTerm
  }) => (
    <Container>
      <Helmet>
      <title>Search | Nomflix</title>
    </Helmet>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search Movies or TV Shows..."
          value={searchTerm} //value 값을 javascript로부터 얻고 싶어 state에 searchTerm이 존재 -> default로 input(검색 입력 란)에 이 value가 존재(컨테이너로부터 옴)
          onChange={updateTerm}
        />
      </Form>
      {loading ? (
        <Loader />
      ) : ( // <> : fragments : 한가지 component만 리턴 가능한 리액트 환경에서 다중 리턴이 가능하게 함
        <>
          {movieResults && movieResults.length > 0 && (
            <Section title="Movie Results">
              {movieResults.map(movie => (
                <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Show Results">
              {tvResults.map(show => (
                <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
              ))}
            </Section>
          )}
          {error && <Message color="#e74c3c" text={error} />}
          {tvResults &&
          movieResults &&
          tvResults.length === 0 &&
          movieResults.length === 0 && (
            <Message text={`Nothing found for: ${searchTerm}`} color="#95a5a6" />
          )}
        </>
      )}
    </Container>
  );

SearchPresenter.propTypes = {
    movieResults:PropTypes.array,
    tvResults:PropTypes.array,
    error:PropTypes.string,
    searchTerm: PropTypes.string,
    loading:PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;