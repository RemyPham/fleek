import React from 'react'

import '../styles/movieInfo.css'

export default function MovieInfo({infos}) {
    console.log(infos)
    return (
        <div className="movie-infos">
            <div className="infos-first">
                <div className="poster-container">
                    <img className="poster" src={"https://image.tmdb.org/t/p/original" + infos.poster_path} alt="movie poster"></img>
                </div>
                <div className="infos-container">
                    <p><span className="title">Title :</span> {infos.title} {(infos.title !== infos.original_title) && <span className="og">( {infos.original_title} )</span>}</p>

                    <p><span className="title">Release Date :</span> {infos.release_date}</p>

                    <p><span className="title">Average Rate :</span> {infos.vote_average} / 10</p>
                </div>
            </div>

            <div className="infos-second">
                <h3>Overview</h3>
                <hr/>
                <p>{infos.overview}</p>
            </div>
        </div>
    )
}
