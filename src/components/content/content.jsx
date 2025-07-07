import styles from "./content.module.css"
import { Searching } from "../searchingThumbnail/searching"
import { Showing } from "../showingThumbnail/showing"
import { useState } from "react"
function Content(){
    const [videoId,setVideoIId]=useState("")
    function settingVideoId(id){
        setVideoIId(id)
    }
    
    return (
        <div>
            <div id={styles.searchContainer}><Searching setVideo={settingVideoId}></Searching></div>
            <div id={styles.showingContainer}><Showing videoId={videoId}></Showing></div>
        </div>
    )
}

export {Content}