import React,{useState} from 'react'
import './header.css'

const Header = () => {

  const [openPhone,setOpenPhone] = useState(false)


  return (
    <div className="header-container">
      <div className="header-image">
        <div className={openPhone ? 'open-phone' : "phone-slider"} onClick={() => setOpenPhone(!openPhone)}>
          <h2>&#128222; {openPhone && <span>054-4854747</span>}</h2>
        </div>
      <div className="body-doctor-section">
        <img src="http://yuliafrenkin.co.il/wp-content/uploads/2018/06/Ulia.jpg" />
        <h2>ד"ר יוליה פרנקין, בעלת ותק רפואי של מעל 20 שנה וניסיון רב בתחומי האסתטיקה.
  
  סיימה את לימודי ההמשך בתחום האסתטיקה הרפואית ועברה התמחות באירופה.
  משתתפת באופן קבוע בכנסים והשתלמויות בארץ ובחו"ל.</h2>
        </div>
        <div  id="badge-ribbon" ><a target="_blank" href="https://www.medreviews.co.il/provider/dr-frenkin-yulia" ><h3> ⭐ 5.0</h3></a></div>
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