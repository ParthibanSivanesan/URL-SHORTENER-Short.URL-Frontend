import React from "react";
import styles from "./Table.module.css";


// const baseUrl = process.env.REACT_APP_BE_SERVERURL || "http://localhost:9003";

 const baseUrl = 'https://your-url-shortner.onrender.com/short' || "http://localhost:9003";

export default function Table(props) {
  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(`${baseUrl}/${props.short}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.headerCell}>Original URL</th>
            <th className={styles.headerCell}>
            
            </th>
            
            <th className={`${styles.headerCell} `}>
              Shortened URL
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.row}>
            <td className={styles.urlCell}>
              <a
                href={`${props.full}`}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.link}
              >
                {props.full}
              </a>
            </td>
            
            <td className={styles.urlCell}><img src="/exchange.png" alt="Logo" className={styles.logo} style = {{width: "40px", height: "40px"}} /></td>

            <td className={`${styles.urlCell} `}>
              <a href={`${baseUrl}/${props.short}`} className={styles.link} target="_blank">
                {props.short}
              </a>
              <img
                className={styles.copyUrl}
                title="copy url"
                src="/copy.png"
                alt="copy url"
                onClick={copyToClipboard}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
