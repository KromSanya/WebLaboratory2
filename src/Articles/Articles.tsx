import articleCard from "./ArticleCard.tsx";
import './arcticleCard.css';
import { useState } from 'react'


import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
function Articles() {
    const [count, setCount] = useState(0)
    let name: string;
    if(count == 0)
    {
        name = " View all"
    }else{
        name = "Hide"
    }
  return(
      <div className={"articles"}>
          <h5>Check out our latest article</h5>
          <div className={"anoterDiv"}>
          {articleCard(image1, "Disease detection, check \n" +
              "up in the laboratory", "In this case, the role of the health laboratory is very important to do\n" +
              "a disease detection...")}

          {articleCard(image2, "Herbal medicines that are \n" +
              "safe for consumption", "Herbal medicine is very widely used at this " +
              "time because of its very good for your health...")}

          {articleCard(image3, "Natural care for healthy \n" +
              "facial skin", "A healthy lifestyle should start from now and also for your skin health.\n" +
              "There are some...")}


          {count == 1 &&
          articleCard(image1, "Natural care for healthy \n" +
              "facial skin", "In this case, the role of the health laboratory is very important to do\n" +
              "a disease detection...")
          }
          {count == 1 &&
              articleCard(image2, "Herbal medicines that are \n" +
                  "safe for consumption", "Herbal medicine is very widely used at this " +
                  "time because of its very good for your health...")
          }
          {count == 1 &&
              articleCard(image3, "Natural care for healthy \n" +
                  "facial skin", "A healthy lifestyle should start from now and also for your skin health.\n" +
                  "There are some...")
          }

          </div>
          <button onClick={() => setCount((count) => +!count)} >{name}</button>
      </div>

  )
}

export default Articles;