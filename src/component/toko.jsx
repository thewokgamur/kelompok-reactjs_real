import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header.jsx';

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
            <img className="timg" src={'http://localhost:3001/images/'+ ddd.image}/>
          </div>
          <div className="Ttitle">{ddd.name}</div>
          <div className="Tprice">RP {ddd.price}</div>
          <div className="tbutton2">
            <button className="tbutton">  Add To Cart  </button>
            <button className="tbutton">  Buy Now </button>
          </div>
        </div>
        <div className="end"></div>
      </Card>
    </div>
  );
};

export default Toko;
