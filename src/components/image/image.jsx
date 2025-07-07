import { useState } from "react"
import styles from "./image.module.css"
import defaultPic from "../../assets/default.jpg"
function Image(props){
    const [videoId,setVideoId]=useState("")
    return (
        <>
        <div id={styles.Image}>
           <a href={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} download="thumbnail.jpg" ></a>
            <button>download</button>
        </div>
         <div id={styles.Image}>
            <a href={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} download="thumbnail.jpg" ></a>
             <button>download</button>
        </div>
         <div id={styles.Image}>
            <a href={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} download="thumbnail.jpg" ></a>
             <button>download</button>
        </div>
        </>
    )
}

export {Image}