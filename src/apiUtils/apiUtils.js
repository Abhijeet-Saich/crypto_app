export const coinOptions = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': 'b03613a0f0msh68c1ce5f59df4dbp18dc00jsn9297cbd3e050',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

export const coinDetail = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coin/',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h'
    },
    headers: {
      'X-RapidAPI-Key': 'b03613a0f0msh68c1ce5f59df4dbp18dc00jsn9297cbd3e050',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
  


export const newsOptions = {
    method: 'GET',
    url: 'https://crypto-news16.p.rapidapi.com/news/top/20',
    headers: {
      'X-RapidAPI-Key': 'b03613a0f0msh68c1ce5f59df4dbp18dc00jsn9297cbd3e050',
      'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
    }
  };


export const exchangeOptions = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/exchanges',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      limit: '50',
      offset: '0',
      orderBy: '24hVolume',
      orderDirection: 'desc'
    },
    headers: {
      'X-RapidAPI-Key': 'b03613a0f0msh68c1ce5f59df4dbp18dc00jsn9297cbd3e050',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
