import './App.css';
import React, {useEffect, useState} from 'react'
import { useParams, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header.jsx';
import FooterLinks from '../footer.jsx';

const Toko = () => {
  const [data1, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3001/product')
    .then(res => res.json())
    .then(data1 => setData(data1))
    .catch(err => console.log(err));
  }, [])
  
  const {id} = useParams();
  const ddd = data1.find(gg => gg.id === parseInt(id))

  if (ddd === undefined) {
    return (
      <div>
        <div>
          <Header />
        </div>
        <p>Data not found</p>
      </div>
    )
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <Card className="tcard">
        <div>
          <div>
            <img style={{ width: '300px', height: '300px' }}  className="timg" src={'http://localhost:3001/images/'+ ddd.image}/>
          </div>
          <div className="Ttitle">{ddd.name}</div>
          <div className="Tprice">RP {ddd.price}</div>
          <pre style={{ width: '380px;overflow:auto' }} rows="100" className="deskripsi">{ddd.deskripsi}</pre>
          <Card style={{ width: '380px', height: '480px' }} className="tpcard">
            <div>
            <img style={{ width: '100px', height: '100px' }}  className="iimg" src={'http://localhost:3001/images/'+ ddd.image}/>
              <h3 className='stock'>Stock: Sisa 3</h3>
              <h3 className='harga'>Harga: </h3>
              <h3 className='TPcard'>RP {ddd.price}</h3>
              <button className="tbutton">  Add To Cart  </button>
              <button className="tbutton">  Buy Now </button>
            </div>
          </Card>
        </div>
        <div className="end">
        </div>
        <Container>

<Row md={3}>
  {data1.map((kelas) => {
      return(
  <Col class="app">
  <Card style={{ width: '380px', height: '480px' }}>
  <Card.Img style={{ width: '340px', height: '250px' }} className='cimg' variant="top" src={'http://localhost:3001/images/'+kelas.image} />
    <Card.Body>
      <Card.Title  className='ctext'>{kelas.name}</Card.Title>
      <Card.Text className='ctext'>
        RP {kelas.price}
      </Card.Text>
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
      </Card>
      <FooterLinks/>
    </div>
  );
};

export default Toko;
