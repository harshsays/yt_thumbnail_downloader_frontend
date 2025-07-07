import styles from "./content.module.css"
import { Searching } from "../searchingThumbnail/searching"
function Content(){
    return (
        <div>
            <div id={styles.searchContainer}><Searching></Searching></div>
            <div id={styles.showingContainer}></div>
        </div>
    )
}

export {Content}