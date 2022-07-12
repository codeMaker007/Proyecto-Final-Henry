import React, {  useState } from 'react';
import style from "./Loading.module.css";

export default function CircularIndeterminate() {
  
    const [responsive, setResponsive] = useState({
        xs: false,
        sm: false,
        md: false
    });
    const handleResponsive = () => {
        if (window.innerWidth < 440) return setResponsive({ xs: true, sm: false, md: false })
        else if (window.innerWidth < 600) return setResponsive({ xs: false, sm: true, md: false })
        else if (window.innerWidth < 900) return setResponsive({ xs: false, sm: false, md: true })
    }
  
    return (
    <div >
        {
            (responsive.md) ? <div style={{  width: '100%', display: 'flex', borderRadius: 5, justifyContent: 'space-evenly', alignItems: 'center' }}>
                <img className={style.loading1} src = "https://ojoalplato-static.s3.amazonaws.com/static/images/ST_ICON_LoadScreen_5_1.gif"></img> 
                
            </div>
            : (responsive.xs)
                ? <div style={{  width: '90%', display: 'flex', borderRadius: 5, justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <img className={style.loading2} src = "https://ojoalplato-static.s3.amazonaws.com/static/images/ST_ICON_LoadScreen_5_1.gif"></img>   
                    
            </div>
            : <div style={{ width: '82%', display: 'flex', borderRadius: 5, justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <img className={style.loading3} src = "https://ojoalplato-static.s3.amazonaws.com/static/images/ST_ICON_LoadScreen_5_1.gif"></img> 
                
            </div>
        }
    
    
    
    </div>
  );
}
