import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Row, Col, Button} from 'react-bootstrap';

export default function Test2(){
  return(

    <div className='container m-auto'>
      <Form noValidate >
        <Row className="mb-3">
          <Form.Group  as={Col} controlId='validateusername'>
            <Form.Label> Username </Form.Label>
            <Form.Control 
              required
              type = "text"
              placeholder='superman'
            />          
            <Form.Control.Feedback type = "invalid">
              กรุณากรอก username
            </Form.Control.Feedback>
          </Form.Group>

        </Row>
        
        <Row>
          <Button type = "submit"> Login </Button>

        </Row>
      </Form>

      
    </div>
  )
}

