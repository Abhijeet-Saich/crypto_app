import React from 'react'
import { BrowserRouter,Route,Routes ,Link} from 'react-router-dom'

//importing components
import './App.css'
import { Layout,Typography,Space} from 'antd'
import Home from './components/Home'
import Navbar from './components/Navbar';
import News from './components/News';
import Exchanges from './components/Exchanges';
import CryptoCurrencies from './components/CryptoCurrencies';
import CryptoDetail from './components/CryptoDetail';



const App = () => {
  return (
    <BrowserRouter>
    <div className='app'>

        <div className='navbar'>
            <Navbar />
        </div>

        <div className='main'>
            <Layout>
                <div className='routes'>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/exchanges" element={<Exchanges />}/>
                        <Route path="/cryptocurrencies" element={<CryptoCurrencies />}/>
                        <Route path="/crypto/:coinID" element={<CryptoDetail />}/>
                        <Route path="/news" element={<News />}/>
                    </Routes>
                </div>
            </Layout>

            <div className='footer'>
                <Typography.Title level={5} style={{textAlign : 'center',color : 'white'}}>
                    Cryptoverse<br />
                    All rights reserved
                </Typography.Title>
                <Space>
                    <Link to='/news'>News</Link>
                    <Link to='/exchanges'>Exchanges</Link>
                    <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                </Space>
            </div>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default App