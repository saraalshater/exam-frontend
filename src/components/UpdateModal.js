import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal,Form, Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class UpdateModal extends React.Component {



    render(){
        return(
            <>



<Modal show={this.props.show} onHide={this.props.showingModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
</Modal>

<Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Flower name</Form.Label>
    <Form.Control type="text" placeholder="flower" defaultValue={this.props.updateObj.name} name="name"/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Img </Form.Label>
    <Form.Control type="text" placeholder="img" defaultValue={this.props.updateObj.imgUrl} name="imgUrl"/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>About</Form.Label>
    <Form.Control type="text" placeholder="about" defaultValue={this.props.updateObj.about} name="about"/>
  </Form.Group>
 
  
  <Button variant="primary" type="submit">
    update
  </Button>
  <Button variant="danger" type="submit">
    close
  </Button>
</Form>
            </>
        )
    }

}





export default withAuth0(UpdateModal);

