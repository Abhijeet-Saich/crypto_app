import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {getNews} from '../store/slices/newsSlice';
import {Row,Col,Card,Typography} from 'antd';




const News = ({less}) => {
  
  const dispatch = useDispatch();
  const count = less ? 6 : 100;
  const newsData = useSelector(state => state.news.data);
  


  const { Text, Title } = Typography;

  useEffect(()=>{
      dispatch(getNews());
  },[])

  return (
    <div>
      <Row gutter={[24,24]}>
        {newsData.filter((ele,i) => i < count).map((ele,i) => 
            <Col xs={24} sm={12} lg={8} key={i}>
                <Card hoverable className="news-card">
                  <a href={ele.url} target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                      <Title className="news-title" level={4}>{ele.title}</Title>
                  </div>
                  <p>{ele.description.length > 100 ? `${ele.description.substring(0, 100)}...` : ele.description}</p>
                  <div className="provider-container">
                      <Text>{ele.date}</Text>
                  </div>
                  </a>
                </Card>
            </Col>)}
      </Row>

    </div>
  )
}

export default News