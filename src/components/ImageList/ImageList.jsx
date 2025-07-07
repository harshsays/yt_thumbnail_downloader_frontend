import styles from "./ImageList.module.css"
import { Image } from "../image/image";
function ImageList(props){
    const videoId=props.videoId;
    return (
        <>
        <div id={styles.ImageList}>
            <Image videoId={videoId}></Image>
        </div>
        </>
    )
}

export {ImageList}