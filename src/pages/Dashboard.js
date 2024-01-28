import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header'
import TabsComponent from '../Components/Dashboard/Tabs'
import axios from 'axios';

function DashboardPage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
  //   fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
  // .then((response) => {
  //   // Code for handling the response
  // })
  // .catch((error) => {
  //   // Code for handling the error
  // });

    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
    )
    .then((response) => {
      console.log("RESPONSE>>>", response);
      setCoins(response.data);
    })
    .catch((err )=> {
       console.log("ERROR>>>", err);
  });
 }, []);

  return (
    <div>
      <Header />
      <TabsComponent coins={coins} />
    </div>
  )
}

export default DashboardPage