import styles from "./searching.module.css"
function Searching(){
    return(
        <div id={styles.searchContainer}>
            <div id={styles.leftSide}><input type="text" id="sh" placeholder="Paste Youtube Video URL"/></div>
            <div id={styles.rightSide}><button>SUBMIT</button></div>
        </div>
    )
}

export {Searching}