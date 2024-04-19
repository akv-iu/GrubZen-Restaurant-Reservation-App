import React , {useState} from 'react';
import {Modal , Button, Carousel } from 'react-bootstrap'

function Restaurant({ restaurant }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='row bs'>
            <div className=".col-md-4">
                <img src={restaurant.imageurls[0]} className='smallimg' />
            </div>
            <div className=".col-md-7">
                <h1>{restaurant.name}</h1>
                <b> <p>Rating : {restaurant.ratings}</p>
                    <p>Phone Number : {restaurant.phonenumber}</p></b>

                <div style={{ float: 'right' }}>
                    <button className='btn btn-primary' onClick={handleShow}>View Details</button>
                </div>
            </div>

            

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{restaurant.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Carousel>

            {restaurant.imageurls.map(url=>{
                return <Carousel.Item>
                <img 
                    className="d-block w-100 bigimg"
                    src={url}
                />
        
              </Carousel.Item>
            })}

        </Carousel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

        </div>
    )
}

export default Restaurant