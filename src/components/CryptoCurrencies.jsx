import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {Card,Row,Col,Input} from 'antd';
import { Link } from 'react-router-dom';
import { getCoins } from '../store/slices/coinSlice';
import millify from 'millify';

const CryptoCurrencies = ({less}) => {

  const count = less ? 10 : 100;
  const dispatch = useDispatch();
  const currencyData = useSelector(state => state.coin.data);
  const [search,setSearch] = useState("");

  useEffect(()=>{
    dispatch(getCoins());
  },[])

  return (
    <div>
      {!less && 
      <div className='search-crypto'>
        <Input placeholder='Search currency' onChange={e => setSearch(e.target.value)}/>
      </div>
      }.
      <Row gutter={[32,32]} className='crypto-card-container'>
        {currencyData?.data?.coins
        .filter((e,i)=> i<count)
        .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
        .map(ele => 
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={ele.uuid}>
             <Link key={ele.uuid} to={`/crypto/${ele.uuid}`}>
              <Card
                title={`${ele.rank}. ${ele.name}`}
                extra={<img className="crypto-image" src={ele.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(ele.price)}</p>
                <p>Market Cap: {millify(ele.marketCap)}</p>
                <p>Daily Change: {millify(ele.change)}%</p>
              </Card>
            </Link>
          </Col>
        )}
      </Row>
    </div>
  )
}

export default CryptoCurrencies