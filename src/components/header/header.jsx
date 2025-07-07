import styles from "./header.module.css"
function Header(){
    return (
        <div id={styles.headerContainer}>
            <div>YouTube Thumbnail Downloader</div>
        </div>
    )
}

export {Header}