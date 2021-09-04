import React ,{useState}from 'react'
import pizzas from '../pizzasdata'
import {Modal} from 'react-bootstrap'

export default function Pizza({props}) {
    const [ quantity , setquantity] = useState(1)
    const [ varient , setvarient] = useState('small')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="m-5 shadow-lg p-3 mb-5 bg-white rounded" style={{margin:'70px'}}>
           <div onClick={handleShow}>
           <h1>{props.name}</h1>
            <img src={props.image} className="img-fluid" style={{height: '200px' , width: '200px'}}/>
           </div>
            
            <div className="flex-container">
            <div className='w-100 m-1'>
            <p>Varients</p>
                
                    <select className='form-control' value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
                        {props.varients.map(varients=>{
                            return <option value={varients}>{varients}</option>
})}
                    </select>
                   
                </div>
                <div className='w-100 m-1'>
                   <p>Quantity</p>
                   <select className='form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                    {[...Array(10).keys()].map((x,i)=>{
                        return <option value={i+1}>{i+1}</option>
                    })}
                   </select>
                </div>
               
                
                

            </div>
            <div className="flex-container">
                    <div className='w-100 m-1'>
                        <h1 className='mt-1'>₹ {props.prices[0][varient]*quantity}Rs/-</h1>
                    </div>
                    <div className='w-100 m-1'>
                     <button className="btn">ADD TO CART</button>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>{props.name}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <img src={props.image}alt="" className="img-fluid" style={{height:'200px',width:'200px'}}/>
    <p>{props.description}</p>
  </Modal.Body>

  <Modal.Footer>
<button className="btn" onClick={handleClose}>Close</button>
  </Modal.Footer>
</Modal>
            
        </div>
    )
}
