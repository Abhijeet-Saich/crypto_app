import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { Statistic,Row,Col,Typography } from 'antd';
import millify from 'millify';

import { getCoins } from '../store/slices/coinSlice';
import CryptoCurrencies from './CryptoCurrencies';
import News from './News';


const Home = () => {

  const dispatch = useDispatch();
  const homeData = useSelector(state => state.coin.data);

  useEffect(()=>{
    dispatch(getCoins());
  },[])

  return (
    <>
      <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
      <Row>
          <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(homeData?.data?.stats?.totalCoins)} /></Col>
          <Col span={12}><Statistic title="Total Exchanges" value={millify(homeData?.data?.stats?.totalExchanges)} /></Col>
          <Col span={12}><Statistic title="Total Market Cap" value={millify(homeData?.data?.stats?.totalMarketCap)} /></Col>
          <Col span={12}><Statistic title="Total 24h volume" value={millify(homeData?.data?.stats?.total24hVolume)} /></Col>
          <Col span={12}><Statistic title="Total Markets" value={millify(homeData?.data?.stats?.totalMarkets)} /></Col>
      </Row>
      <div className='home-heading-container'>
        <Typography.Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Typography.Title>
        <Typography.Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Typography.Title>
      </div>
      <CryptoCurrencies less/>
      <div className='home-heading-container'>
        <Typography.Title level={2} className='home-title'>Latest Crypto News</Typography.Title>
        <Typography.Title level={3} className='show-more'><Link to='/news'>Show More</Link></Typography.Title>
      </div>
      <News less/>
    </>
  )
}

export default Home