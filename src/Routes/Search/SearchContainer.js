/**
 * 검색 기능 컨테이너 : 기존 컨테이너에 검색 로직을 두가지 추가함 
 */
import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component{
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        loading: false,
        error: null
    };
    //누군가가 폼(=검색창)에서 text를 입력 -> 엔터 누름 = handleSubmit
    // searchTerm이 빈칸이 아닌걸 체크 -> searchByTerm함수를 실행
    handleSubmit = event => {
      event.preventDefault();
        const { searchTerm } = this.state;
        if (searchTerm !== "") { //(""=문자열) 빈 문자열이 아니라면
          this.searchByTerm(); //데이터 불러옴
        }
    };
    
    updateTerm = event => {
      const {
        target: { value }
      } = event;
      this.setState({
        searchTerm: value
      });
    };
    //handleSubmit을 통해 searchByTerm이 모든 작업들을 준비해줌
    //searchTerm이 공백이 아닐때,(21번째 줄 참고) searchTerm을 인자로 넣고 searchByTerm을 호출 
    searchByTerm = async () => {
        const { searchTerm } = this.state;
        this.setState({ loading: true }); //타이핑,검색 했을 때 로딩을 true
        try {
          const {
            data: { results: movieResults }
          } = await moviesApi.search(searchTerm);
          const {
            data: { results: tvResults }
          } = await tvApi.search(searchTerm);
          this.setState({
            movieResults,
            tvResults
          });
        } catch {
          this.setState({ error: "Can't find results." });
        } finally {
          this.setState({ loading: false });
        }
    };

    render() {
      //Structuring
        const { movieResults, tvResults, searchTerm, loading, error } = this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm} 
                loading={loading} 
                error={error}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
            />
        );
    }
}