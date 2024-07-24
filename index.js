import data from "./data";

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
function Card(props) {
    console.log(props);
    return (
        <div className="card">
            <img src={`./images/${props.img}`}></img>
            <p className="card--rating"><img src="./images/star 1.png"></img> {props.rating}<span> ({props.reviewCount}). {props.location}</span></p>
            <p>{props.title}</p>
            <p className="card--charge"><span>FROM ${props.price}</span> / person</p>
        </div>
    )
}                       

function App() {
    // <Hero />
const cards = data.map(item => {
return(
    <Card 
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
    />
)
})        

return (
<div>
    <Navbar />
    {cards}
</div>
)
}

// function App() {
//     const cards = data.map(item => {
//         return (
//             <Card 
//                 img={item.coverImg}
//                 rating={item.stats.rating}
//                 reviewCount={item.stats.reviewCount}
//                 location={item.location}
//                 title={item.title}
//                 price={item.price}
//             />
//         )
//     })
    
//     return (
//         <div>
//             <Navbar />
//             {cards}
//         </div>
//     )
// }
ReactDOM.render(<App />,root);