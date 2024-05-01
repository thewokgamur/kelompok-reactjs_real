//C:\react-js\my-app\src\App.js
import React, { useState } from "react"
import axios from 'axios'
import Header from '../header.jsx';
 
function Upload() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState()
    const [msg, setMsg] = useState("");
       
    const upload = () => {
        const formData = new FormData()
        formData.append("name", name);
        formData.append("price", price);
        formData.append('file', file)
        axios.post('http://localhost:3001/create',formData )
        .then((response) => {
            console.log(response);
            if(response.data.Status === 'Success') {
                setMsg("File Successfully Uploaded");
            }else{
                setMsg("Error");
            }
        })
        .catch(er => console.log(er))
    }
    return (
    <div className="container" style={{paddingTop: 10}}>
        < Header />
    <div className="row"><h1>Upload Barang Mu Disini</h1>
        <div className="col-12">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder='Enter Name' autoComplete='off'
            onChange={(e) => setName(e.target.value)}/> 
        </div>
        <div className="col-12">
            <label className="form-label">Price</label>
            <input type="text" className="form-control" placeholder='Enter Price' autoComplete='off'
            onChange={(e) => setPrice(e.target.value)}/> 
        </div>
                 
        <div className="col-12">
          <label className="form-label">Upload File</label>
          <input className="form-control form-control-lg" type="file" onChange={(e) => setFile(e.target.files[0])}/>
        </div>
         
      <button type="button" className="btn btn-primary btn-lg" onClick={upload} style={{marginTop: '20px'}}>Upload</button>
      <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{msg}</h1>
    </div>
    </div>
  )
}
 
export default Upload;