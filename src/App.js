import React, { useState, useEffect } from "react";
import './App.css';
import img1 from './img/1.jpg';
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img8 from "./img/8.jpg";
import img9 from "./img/9.jpg";
import img11 from "./img/11.jpg";
import img12 from "./img/12.jpg";
import img13 from "./img/13.jpg";
import avtna from "./img/avtna.jpg";
import avttroc from "./img/avttroc.jpg";

function App() {
  const [dateState, setDateState] = useState(new Date());
  let birthday = new Date('2023-05-01');

  useEffect(() => {
      setInterval(() => setDateState(new Date()), 1000);
  }, []);

const get_day_of_time = (d1, d2) => {
  let ms1 = d1.getTime();
  let ms2 = d2.getTime();
  return Math.ceil((ms2 - ms1) / (24*60*60*1000));
};
// const get_day = (d1, d2) => {
//   let ms1 = d1.getDate();
//   let ms2 = d2.getDate();
//   return Math.ceil((ms2 - ms1));
// };
// const get_month = (d1, d2) => {
//   let ms1 = d1.getMonth();
//   let ms2 = d2.getMonth();
//   return Math.ceil((ms2 - ms1));
// };
// const get_year = (d1, d2) => {
//   let ms1 = d1.getYear();
//   let ms2 = d2.getYear();
//   return Math.ceil((ms2 - ms1));
// };


let allDate = get_day_of_time(birthday,dateState)
// let date = get_day(birthday,dateState)
// let month = get_month(birthday,dateState)
// let year = get_year(birthday,dateState)

const colors = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img11,img13,img12]
const delay = 2500

const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
      return () => {
        resetTimeout();
      };
    }, [index]);

  return (
    <div className="App">
      <div className="body-page">
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {colors.map((backgroundColor, index) => (
              <div
                className="slide"
                key={index}
              >
                <img src={backgroundColor} className="App-logo" alt="logo" />
              </div>
            ))}
          </div>
          <div className="show-background">
              <h3 className="check-name">Nhung
              <div class="heart">
                <div class="left"></div> 
                <div class="right"></div>
              </div>
                Diện</h3>
          </div>
        </div>

          <div className="time-background">
              <span className="date-time">
                Yêu thương nhau {allDate} ngày <br/>
                {/* {year > 0 ? <span>{year} năm <br/> </span>  : '' }
                {month > 0 ? <span>{month} tháng <br/></span> : '' }
                {date > 0 ? <span>{date} ngày <br/></span> : '' } */}
                <span>{dateState.toLocaleTimeString()} giây</span> 
              </span>
          </div>

        <div className="avata-icon">
          <div class="avt-avt">
            <div class="avt-avt-div">
              <img src={avttroc} className="avt-icon" alt="logo" />
            </div>
            <p class="name-title">
            Ba Mít
            </p>
            <p class="text-cung">
            ♐ 24-11
            </p>
          </div>
          <div class="avt-avt">
            <div class="avt-avt-div">
              <img src={avtna} className="avt-icon" alt="logo" />
            </div>
            <p class="name-title">
            Mẹ Mon
            </p>
            <p class="text-cung">
            ♓ 26-02
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
