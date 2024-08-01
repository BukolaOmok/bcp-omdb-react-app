import React from "react";

function MovieCard(props) {
    return (
        <div className="movie_card">
            <p>Title: {props.name}</p>
            <p>Year: {props.year}</p>
            <p>Abstract:</p>
            <p>Main Cast:</p>
            <div className="post_comment">
                <p>Your comment</p>
                <textarea placeholder="Your comment goes here..."></textarea>
                <button>Submit</button>
            </div>
        </div>
    );
}
