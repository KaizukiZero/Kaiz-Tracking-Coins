
import React from "react";
import styles from '../styles/coins.module.css';
const Coins = ({name , image, symbol , price, volume,percentage24h}) => {
    return (
      <div className={styles.coinscon}>
        <div className={styles.coinsrows}>
          <div className={styles.symbolcoins}>
            <img src={image} alt={name}/>
            <h1>{name} ({symbol})</h1>
          </div>
          <div className={styles.coinsdata}>
              <p className={styles.pricecoins}>{price.toLocaleString()} Bath</p>
              {percentage24h < 0 ?(
                <p className={styles.pc_red}>{percentage24h.toFixed(2)}</p>
              ) : (
                <p className={styles.pc_green}>{percentage24h.toFixed(2)}</p>
              )}
              <p className={styles.mtk}>{volume.toLocaleString()} Bath</p>
          </div>
        </div>
      </div>
      );
}
 
export default Coins;