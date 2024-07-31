import React from "react";
function App() {
    const [textFieldValues, setTextFieldValues] = React.useState({
        searchValue: "",
        commentValue: "",
    });

    function handleChangeInTextField(event) {
        const { name, value } = event.target;
        setTextFieldValues((prevTextFieldValues) => ({
            ...prevTextFieldValues,
            [name]: value,
        }));
    }

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
                <button>Search</button>
            </div>
            <div className="comments_section">
                <h3>Our comments on movies</h3>
                <button>Refresh</button>
            </div>
        </div>
    );
}

export default App;
