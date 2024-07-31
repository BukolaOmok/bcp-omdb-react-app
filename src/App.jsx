// import { DemonstratingProps } from "./components/demo/DemonstratingProps";

function App() {
    return (
        <div>
            <h1>BCP - OMDB Movie Explorer</h1>
            <div>
                <h4>Search movies</h4>
                <input></input>
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
