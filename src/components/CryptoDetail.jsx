import React, { useEffect, useState } from "react";
import millify from "millify";
import { useDispatch, useSelector } from "react-redux";
import { getCoinDetail } from "../store/slices/detailSlice";
import { useParams } from "react-router-dom";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Col, Row, Typography, Select } from "antd";

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetail = () => {
  const { coinID } = useParams();
  const [timeperiod, setTimeperiod] = useState("7d");

  const dispatch = useDispatch();
  const coinInfo = useSelector((state) => state.detail.data?.coin);

  useEffect(() => {
    dispatch(getCoinDetail({ coinID, name: "abhijeet" }));
    console.log("yes");
  }, []);

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${coinInfo?.price && millify(coinInfo?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: coinInfo?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${coinInfo?.volume && millify(coinInfo?.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${coinInfo?.marketCap && millify(coinInfo?.marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        coinInfo?.allTimeHigh?.price && millify(coinInfo?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: coinInfo?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: coinInfo?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: coinInfo?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${coinInfo?.supply?.total && millify(coinInfo?.supply?.total)}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        coinInfo?.supply?.circulating && millify(coinInfo?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <div>
      <Col className="coin-detail-container">
        <Col className="coin-heading-container">
          <Title level={2} className="coin-name">
            {coinInfo?.name} ({coinInfo?.symbol}) Price
          </Title>
          <p>
            {coinInfo?.name} live price in US Dollar (USD). View value
            statistics, market cap and supply.
          </p>
        </Col>

        <Col className="other-stats-info">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">
              Other Stats Info
            </Title>
            <p>
              An overview showing the statistics of {coinInfo?.name}, such as
              the base and quote currency, the rank, and trading volume.
            </p>
          </Col>
          {genericStats.map(({ icon, title, value }) => (
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>

        <Col className="coin-desc-link">
          <Col className="coin-links">
            <Title level={3} className="coin-details-heading">
              {coinInfo?.name} Links
            </Title>
            {coinInfo?.links?.map((link) => (
              <Row className="coin-link" key={link.name}>
                <Title level={5} className="link-name">
                  {link.type}
                </Title>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.name}
                </a>
              </Row>
            ))}
          </Col>
        </Col>
      </Col>
    </div>
  );
};

export default CryptoDetail;
