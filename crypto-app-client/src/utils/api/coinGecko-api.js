const basePath = "https://api.coingecko.com/api/v3"
export const pingCoinGecko =async () =>{
  const url = `${basePath}/ping`
  const response = fetch(url)
  return response
}
export const fetchMarketList = async () =>{
  const url = `${basePath}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  const response = await fetch(url)
  if(!response){
    const message = `An Error has occured`
    throw new Error(message)
  }
  return await response.json()
}