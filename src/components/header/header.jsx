import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-image">
        <div  id="badge-ribbon" ><a href="https://www.medreviews.co.il/provider/dr-frenkin-yulia"><h2> ⭐ 5.0</h2></a></div>
      </div>
      <div className="header-hovers">
        {/* <div className="header-box"><p>בוטוקס</p></div>
        <div className="header-box"><p>פיסול פנים</p></div>
        <div className="header-box"><p>מזותרפיה</p></div>
        <div className="header-box"><p>סקין בוסטר</p></div>
        <div className="header-box"><p>עיצוב ועיבוי שפתיים </p></div> */}
        <div className="description-inner"><h1>המקום בו יופי, איכות חיים ובריאות נפגשים.</h1> </div>
      </div>
      
    </div>
  )
}

export default Header