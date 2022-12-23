import Counter from "../components/Counter";
import DateNow from "../components/DateNow";

function HomePage() {
    return (
        <div className="home-page">            
            <DateNow />
            <Counter />
        </div>
    )
}

export default HomePage;