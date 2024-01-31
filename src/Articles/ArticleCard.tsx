


function articleCard(img: string, header: string, text: string) {


    return(
        <div className={"articleCard"}>
            <img src={img}></img>
            <h5>{header}</h5>
            <p>{text}</p>
            <a>Read more →</a>
        </div>
    )
}

export default articleCard;