import styles from "./showing.module.css"
import { ImageList } from "../ImageList/ImageList";
function Showing(props){
    const value=props.videoId;
  
    return (
        <div id={styles.showContainer}>
            <div id={styles.headingContainer}><h1 style={{textShadow:"0px 2px 10px black"}}>Video Thumbnails</h1></div>
            <div id={styles.thumbnailListContainer}>
                <ImageList videoId={value}></ImageList>
            </div>
        </div>
    )
}

export {Showing}