import {  useState } from "react";
import styles from "./searching.module.css";

function Searching(props) {
  const [value, setValue] = useState("");
  const [valid,setValid]=useState(false)

  function settingVideoId() {
    const v=new URL(value).searchParams.get('v')
    props.setVideo(v);
    setValue("");
  }
  

  return (
    <div id={styles.searchContainer}>
      <div id={styles.leftSide}>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          id="sh"
          placeholder="Paste Youtube Video URL"
          onKeyDown={(e)=>e.key==="Enter"?settingVideoId():null}
        />
      </div>
      <div id={styles.rightSide}>
        <button onClick={settingVideoId}>SUBMIT</button>
      </div>
    </div>
  );
}

export { Searching };
