import './Cardholder.css'

import i_search from './assets/icon_lupa.svg';
import i_pharmacy from './assets/icon_pills.svg';
import i_consult from './assets/icon_consultation.svg';
import i_details from './assets/icon_details.svg';
import i_emergency from './assets/icon_emergency.svg';
import i_tracking from './assets/icon_tracking.svg';

import Card from "./Card";

function Cardholder() {
return(<div className="cardsDiv">
        <h2>Our services</h2>
        <hr></hr>
        <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo
            treatment with our highly qualified doctors you can consult with us which type of service is suitable for
            your health</p>
        <div className={"cardholder"}>
            {Card("Search doctor", "Choose your doctor from thousands of specialist, general, and trusted hospitals", i_search)}
            {Card("Online pharmacy", "Buy your medicines with our mobile application with a simple delivery system", i_pharmacy)}
            {Card("Consultation", "Free consultation with our trusted doctors and get the best recomendations", i_consult)}
            {Card("Details info", "Free consultation with our trusted doctors and get the best recomendations", i_details)}
            {Card("Emergency care", "You can get 24/7 urgent care for yourself or your children and your lovely family", i_emergency)}
            {Card("Tracking", "Track and save your medical history and health data", i_tracking)}
        </div>
        <button className={"whiteButton"}>Learn More</button>
    </div>

)

}

export default Cardholder;
