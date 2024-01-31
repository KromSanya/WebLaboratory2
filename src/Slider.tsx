import './slider.css'

import arrowL from './assets/Arrow_left.svg'
import arrowR from './assets/Arrow_right.svg'

import circle from './assets/Circle.svg'

import pic1 from './assets/ProfilePics/image 1.png'
import pic2 from './assets/ProfilePics/image 2.png'

import { useState } from 'react'

function Slider(){

  const [count, setCount] = useState(0)

  const SlideData =  [
    {Name: "Edward Newgate", img: pic1, work: "Founder Circle", quote: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”"},
    {Name: "Edward Newgate", img: pic1, work: "Founder Circle", quote: "“Nuestra aplicación dedicada a la participación del paciente y nuestro portal web le permiten acceder a la información de forma instantánea y de forma segura”"},
    {Name: "Venedikt Vadimovich", img: pic2, work: "Game developer", quote: "“It just works”"},
    {Name: "Edward Newgate", img: pic1, work: "Founder Circle", quote: "“Чипи чипи чапа чапа дуби дуби даба даба”"}
];



    return(
      <div>
        <div className={"SliderContent"}>
          <h2>What our customer are saying</h2>
          <hr></hr>
          <div>
            <div>
              <img src={SlideData[count].img}></img>
              <div>
                <p className={"NameText"}>{SlideData[count].Name}</p>
                <p>{SlideData[count].work}</p>
              </div>
            </div>
            <p>{SlideData[count].quote}</p>
          </div>
        </div>
        <div className={"controlsDiv"}>
          <img src={arrowL} onClick={() => setCount((count) => Math.max(count - 1, 0))} className={count<=0?"inactive":""}></img>
          <div>
            <img src={circle} className={count==0?"unselectable":"inactive unselectable"}></img>
            <img src={circle} className={count==1?"unselectable":"inactive unselectable"}></img>
            <img src={circle} className={count==2?"unselectable":"inactive unselectable"}></img>
            <img src={circle} className={count==3?"unselectable":"inactive unselectable"}></img>
          </div>
          <img src={arrowR} onClick={() => setCount((count) => Math.min(count + 1, 3))} className={count>=3?"inactive":""}></img>
        </div>
      </div>
    )
}

export default Slider