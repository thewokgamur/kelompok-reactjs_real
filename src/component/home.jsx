import './App.css';
import React, {useEffect} from 'react'
import Profil from '../assets/Aaa.png';
import keyboard from '../assets/rexus.jpg';
import mouse from '../assets/logitech.jpg';
import controller from '../assets/xbox.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header.jsx';
import FooterLinks from '../footer.jsx';
import { useState } from 'react';
import semuakelas from '../data/index'
import { Link, useParams, Navigate } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Carousel } from 'antd';
import { alignPropType } from 'react-bootstrap/esm/types.js';
const contentStyle = {
  width: '1900px',
  margin: 0,
  height: '720px',
  color: '#fff',
  lineHeight: '160px',
  Align: 'center',
  textAlign: 'center',
  background: '#364d79',
};
const ggg = {
  marginleft: '50px',
};
const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
// ..
AOS.init();

function Introduction({ nama, kelas }){
    return (
  
    <div className="App">
      <h1 className='nama'>halo, nama saya {nama} dan saya kelas {kelas} </h1>
    </div>
    );
  }

  const items = [
    getItem('Processor', '1', <PieChartOutlined />),
    getItem('Graphics card', '2', <DesktopOutlined />),
    getItem('Motherboard', '3', <UserOutlined />),
    getItem('Keyboard Gaming', '4', <TeamOutlined />),
    getItem('Mouse Gaming', '5', <FileOutlined />),
  ];
  
  const Home = props => {
    const [data1, setData] = useState([])
    useEffect(()=>{
      fetch('http://localhost:3001/product')
      .then(res => res.json())
      .then(data1 => setData(data1))
      .catch(err => console.log(err));
    }, [])
    const [products,setproduct,] = useState(0);
    const {id} = useParams();
    

    function increaseOrderCount(){
        setproduct(products + 1)
    }

    function decreaseOrderCount(){
        if (products > 0){
            setproduct(products - 1)
        }
    }
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
      <div>
      <Header />
      <Carousel arrows infinite={true}>
      <div>
        <h3 style={contentStyle}><img style={contentStyle} src="https://pict-a.sindonews.net/dyn/850/pena/news/2023/07/11/123/1148983/5-rekomendasi-pc-gaming-terbaik-2023-yyy.jpg" alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img style={contentStyle} src="https://www.dbs.id/id/iwov-resources/images/blog/1404x630-article-kta-17012022-7-r.jpg" alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img style={contentStyle} src="https://rakyatsulsel.fajar.co.id/wp-content/uploads/2023/08/ilustrasi-Rakit-PC-Gaming.jpg" alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img style={contentStyle} src="https://www.blibli.com/friends-backend/wp-content/uploads/2023/03/B200207-Cover-Rekomendasi-PC-Gaming-7-Jutaan-scaled.jpg" alt="" /></h3>
      </div>
    </Carousel>
      <Layout
      style={{
        minHeight: '100vh',
        backgroundColor: 'rgba(0,0,0, 0)',
      }}
    >
      <Sider style={{ Width: '2000px',}} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <div className='card-product'>



      <Container style={{width: '3000px'}}>
<Row md={4}>
  {data1.map((kelas) => {
      return(
  <Col class="app">
  <Card style={{ width: '18rem', height: '28rem' }}>
  <Card.Img style={{ width: '250px', height: '200px' }} className='cimg' variant="top" src={'http://localhost:3001/images/'+kelas.image} />
    <Card.Body>
      <Card.Title  className='ctext'>{kelas.name}</Card.Title>
      <Card.Text className='ctext'>
        RP {kelas.price}
      </Card.Text>
      <div className='Home'>
      <Button className='ctext' variant="black" onClick={decreaseOrderCount}>-</Button>
      <span className='ctext'>{products}</span>
      <Button className='ctext' variant="black" onClick={increaseOrderCount}>+</Button>
      </div>
      <Link
              to={{
                pathname: `/toko/${kelas.id}`,
                state: { data1: id }
              }}
            >
              <button>View</button>
            </Link>
    </Card.Body>
  </Card>
  </Col>
        );
      })}
  </Row>

  </Container>
  </div>
  </Layout>
  <FooterLinks/>
      </div>
    )
  };
  
  export default Home