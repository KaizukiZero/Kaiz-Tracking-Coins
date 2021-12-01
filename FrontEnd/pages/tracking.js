import { useState, useEffect } from "react"
import axios from 'axios'
import Coins from '../components/Coins'
import styles from "../styles/tracking.module.css";


const coinstracking = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=THB&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
    }).catch(err => {
      console.log(err)
    })

  })

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })
  
  return(
    <div className={styles.coinsconta}>
      <div className={styles.coinssearch}>
       <form>
       <input type="text" placeholder="Search" className={styles.searchbar} onChange={handleChange}/>
       </form>

      </div>      
      {filteredCoins.map(coin => {
        return(
          <Coins key={coin.id} 
          name={coin.name} 
          image={coin.image} 
          price={coin.current_price}
          symbol={coin.symbol}
          percentage24h={coin.price_change_percentage_24h}
          volume={coin.market_cap}/>
        )
      })}
    </div>
  )
}

 
export default coinstracking;