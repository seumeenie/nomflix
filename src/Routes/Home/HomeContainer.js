/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class extends React.Component{
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    };

    async componentDidMount() {
        try{
          const { data: { results: nowPlaying } 
                } = await moviesApi.nowPlaying();
          const { data: { results: upcoming }
                } = await moviesApi.upcoming();
          const { data: { results: popular }
                } = await moviesApi.popular();
            this.setState({
                nowPlaying,
                upcoming,
                popular
            });
            console.log(nowPlaying);
        } catch {
            this.setState({
                error: "Can't find Movie info."
            });
        } finally {
            this.setState({
                loading: false
            });
            console.log("aaa");
        }
    }

    render() {
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        console.log("aaa");
        console.log(this.state);
        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                error={error}
                loading={loading}
            />
        );
    }
}