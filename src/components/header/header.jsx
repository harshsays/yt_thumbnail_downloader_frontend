import styles from "./header.module.css"
function Header(){
    return (
        <div id={styles.headerContainer}>
            <div style={{textShadow:"0px 6px 10px black"}}>YouTube Thumbnail Downloader</div>
        </div>
    )
}

export {Header}