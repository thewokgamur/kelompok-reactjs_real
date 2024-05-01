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
import { useState } from 'react';
import semuakelas from '../data/index'
import { Link, useParams, Navigate } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Introduction({ nama, kelas }){
    return (
  
    <div className="App">
      <h1 className='nama'>halo, nama saya {nama} dan saya kelas {kelas} </h1>
    </div>
    );
  }


  
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
    return (
      <>
      <Header />
      <Link
              to={{
                pathname: `/upload`,
              }}
            >
              <button>Upload Produk Baru</button>
            </Link>
      <img className='profil' src={Profil} alt=""/>
      <Introduction nama="1" kelas="rpl-Xi_a"/>
      <div className='card-product'>
      <Container>

<Row md={4}>
  {data1.map((kelas) => {
      return(
  <Col>
  <Card style={{ width: '18rem' }}>
  <Card.Img className='cimg' variant="top" src={'http://localhost:3001/images/'+kelas.image} />
    <Card.Body>
      <Card.Title className='ctext'>{kelas.name}</Card.Title>
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
      </>
    )
  };
  
  export default Home