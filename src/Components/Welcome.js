import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import { Card, ListGroupItem, ListGroup, Container, Row, } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import welcss from "../Css/welcome.module.css";
import { Modal ,ModalBody,ModalTitle} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Welcome extends Component {
  constructor(){
    super()
    this.state={
      open:false,
    }
  }

  handleopen(){
    console.log("tets")
    this.setState({open:true})
  }
  handleclose(){
    this.setState({open:false})
    window.location="./home"
  }

  render() {

    return (
      <React.Fragment>
      <Button style={{marginLeft:"90%" ,marginTop:"20px",width:"90px"}} onClick={this.handleopen} onClick={()=>{
        localStorage.removeItem("username")
        localStorage.removeItem("password")
        window.location="/"
      }}>Logout</Button>
        <body className={welcss} >
          <Container>
            <Row>
              <Col>

                {/** mt-5*/}
                <div className={welcss.div1}>
                  <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src="https://www.digitaldesignjournal.com/wp-content/uploads/2018/07/Python-Programming-Language-Wallpaper_3.jpg" />
                    <Card.Body>
                      <Card.Title>Python</Card.Title>
                      <Card.Text style={{ color: "black" }}>
                        If you want to test your python quiz ability then clcick here.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>Cras justo odio</ListGroupItem>

                    </ListGroup>
                    <Card.Body>
                      <Button>
                        <Card.Link href="/python" style={{ color: "black", fontWeight: "bold" }}>Python</Card.Link>
                      </Button>


                    </Card.Body>
                  </Card>

                </div>

              </Col>
              <Col>

                <div className='mt-5'>
                  <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src="https://wallpapercave.com/wp/wp5425565.png" />
                    <Card.Body>
                      <Card.Title>Java</Card.Title>
                      <Card.Text style={{ color: "black" }}>
                        If you want to test your java MCQ knowledge then click here
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>Cras justo odio</ListGroupItem>

                    </ListGroup>
                    <Card.Body>
                      <Button >
                        <Card.Link href="/java" style={{ color: "black", fontWeight: "bold" }}>java</Card.Link>
                      </Button>


                    </Card.Body>
                  </Card>

                </div>

              </Col>





            </Row>

          </Container>
          <hr />
          <Container className='container2'>
            <Row>
              <Col>

                <div className={welcss.div1}>
                  <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7XeXjDyixnwAbJ4ZeSb66Dih9e5InGFgPMw&usqp=CAU" />
                    <Card.Body>
                      <Card.Title>CSS</Card.Title>
                      <Card.Text style={{ color: "black" }}>
                        If you want to test your CSS MCQ ability test then click here
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>Cras justo odio</ListGroupItem>

                    </ListGroup>
                    <Card.Body>
                      <Button>
                        <Card.Link href="/css" style={{ color: "black", fontWeight: "bold" }}>Css</Card.Link>
                      </Button>

                    </Card.Body>
                  </Card>

                </div>

              </Col>
              <Col>

                <div className='mt-5'>
                  <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src="https://www.datocms-assets.com/14946/1627286560-sql-databases.png?auto=format" />
                    <Card.Body>
                      <Card.Title>Database</Card.Title>
                      <Card.Text style={{ color: "black" }}>
                        If you want to test your Database MCQ ability test then click here
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>Cras justo odio</ListGroupItem>

                    </ListGroup>
                    <Card.Body>
                      <Button>
                        <Card.Link href="/database" style={{ color: "black", fontWeight: "bold" }} >Database</Card.Link>
                      </Button>


                    </Card.Body>
                  </Card>

                </div>

              </Col>





            </Row>

          </Container>

        </body>


        <Modal
        size="sm"
        show={this.state.open}
        onHide={this.handleclose}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
  
      </React.Fragment>
    )
  }
}


