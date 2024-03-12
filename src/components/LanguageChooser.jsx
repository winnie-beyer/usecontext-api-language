

import { useContext } from "react";
import { LanguageContext } from "../App";

const LanguageChooser = ()=>{
    const {language,setLanguage} =useContext(LanguageContext)
    useContext(LanguageContext)
    console.log(useContext(LanguageContext))
    return(
        <div className='header'>
        <h1>Please select you language</h1>
       <div className='select'>
       <select value={language} onChange={(e)=>setLanguage(e.target.value)}name="" id="">
       <option value="DE">🇩🇪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;German</option>
        <option value="US">🇺🇸&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;English</option>
        <option value="TR">🇹🇷&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Turkish</option>
        <option value="IR">🇮🇷&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Persian</option>
        <option value="FR">🇫🇷&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;French</option>
        <option value="SP">🇪🇸&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Spanish</option>
        <option value="Ch">🇫🇷&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chinese</option>
       </select>
       </div>
       </div>
    )

}

export default LanguageChooser