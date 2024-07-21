
let root = document.querySelector("#root");
function Navbar() {
    return (
        <nav className="navbar">
            <img src="./images/airbnb 1.svg"></img>
        </nav>
    )
}

function Hero() {
    return (
        <main className="hero--section">
            <img src="./images/Group 77.png" className="hero--img" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </main>
    )
}
function Card() {
    return (
        <div className="card">
            <img src="./images/image 12.png"></img>
            <p className="card--rating"><img src="./images/star 1.png"></img> 5.0 <span>(6).USA</span></p>
            <p>Life lessons with Katie Zaferes</p>
            <p className="card--charge"><span>FROM $136</span> / person</p>
        </div>
    )
}                       

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card />
            <Card />
        </div>
    )
}
ReactDOM.render(<App />,root);