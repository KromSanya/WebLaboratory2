import './Banner.css';

function Banner(caption: string, txt: string, img: string, buttonTxt: string, inverse_row?: boolean, inverse_button?: boolean){
    if (typeof inverse_row == 'undefined') inverse_row = false;
    if (typeof inverse_button == 'undefined') inverse_button = false;

    return (<div className={"blockFlexHorizontal"} style={{flexDirection: inverse_row ? 'row-reverse' : 'row'}}>

            <div>
                <h2>{caption}</h2>
                <hr></hr>
                <p>{txt}</p>
                <button>{buttonTxt}</button>
            </div>
            <img src={img}></img>
    </div>
    )
}

export default Banner