import './Card.css';

function Card(caption: string, txt: string, img: string) {
    return(
    <div className={"card"}>
        <img src={img}></img>
        <h3>{caption}</h3>
        <p>{txt}</p>
    </div>
    )
}

export default Card;