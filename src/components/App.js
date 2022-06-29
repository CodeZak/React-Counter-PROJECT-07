import { useState } from "react";
import Count from "./count";
function App() {
    const [count, setCaount] = useState(0);
    function increaseCount() {
        setCaount((count) => count + 1);
    }

    function decraaseCount() {
        setCaount((count) => count - 1);
    }

    return (
        <div className="container">
            <div className="mainCircle">
                <Count number={count} />
                <div className="decButton" onClick={decraaseCount}>
                    -
                </div>
                <div className="incButton" onClick={increaseCount}>
                    +
                </div>
            </div>
        </div>
    );
}

export default App;
