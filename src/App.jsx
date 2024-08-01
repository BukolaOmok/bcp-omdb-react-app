import React from "react";
import axios from "axios";

function App() {
    const apiBaseURL = import.meta.env.VITE_API_BASE_URL;
    if (!apiBaseURL) {
        throw new Error("missing import.meta.env.BASE_URL");
    }
    console.log(apiBaseURL)

    const [textFieldValues, setTextFieldValues] = React.useState({
        searchValue: "",
        commentValue: "",
    });
    const [currentSearchResult, setCurrentSearchResult] = React.useState([]);

    function handleChangeInTextField(event) {
        const { name, value } = event.target;
        setTextFieldValues((prevTextFieldValues) => ({
            ...prevTextFieldValues,
            [name]: value,
        }));
    }

    const getMoviesFromSearchQuery = async () => {
        const searchURL =
        apiBaseURL +
            `/movies/search?searchTerm=${textFieldValues.searchValue}`;
        const newSearchResult = await axios.get(searchURL);
        console.log(newSearchResult.data);
        setCurrentSearchResult(newSearchResult.data);
        setTextFieldValues((prevTextFieldValues) => ({
            ...prevTextFieldValues,
            searchValue: "",
        }));
    };

    return (
        <div>
            <h1>BCP - OMDB Movie Explorer</h1>
            <div>
                <h4>Search movies</h4>
                <input
                    name="searchValue"
                    value={textFieldValues.searchValue}
                    onChange={handleChangeInTextField}
                ></input>
                <button onClick={getMoviesFromSearchQuery}>Search</button>
            </div>
            <div className="comments_section">
                <h3>Our comments on movies</h3>
                <button>Refresh</button>
            </div>
        </div>
    );
}

export default App;
