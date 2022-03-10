import React, { Component } from 'react'
import '../Css/CssData.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Modal, ModalBody } from 'react-bootstrap';
import Timer from './Timer';

var score = 0;//global variable
class JavaData extends Component {
  data = []

  constructor() {
    super()
    this.state = {

      javaquestions: [],
      correctanswer: '',
      show: false,
      scores: 0,
      userName:"",
      Subject:""

    }
    this.handleChange = this.handleChange.bind(this);
    this.f1 = this.f1.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }


  componentDidMount() {
    axios.get("/private/quizdata/javaquestions",{
      auth:{
        username:localStorage.getItem("username"),
        password:localStorage.getItem("password")
    }
    })
      .then(response => {
        console.log(response)
        this.setState({ javaquestions: response.data })

      }).catch(console.log);
  }

  handleChange = e => {
    //     const { name, value } = e.target;
    //   console.log(e.target.value)
    //     this.setState({
    //       [name]: value
    //     });
    //console.log(correctanswer);
    console.log(e.target.value)
    this.data.push({
      "id": e.target.id,
      "selectedvalue": e.target.value
    })



    // this.setState({correctanswer:e.target.value})
    // console.log(this.state.correctanswer);
  };


  f1() {
    score = 0
    this.state.javaquestions.map(w => {

      this.data.map(f => {

        if (w.qid == f.id) {
          if (w.correctAnswer == f.selectedvalue) {
            score = score + 10;
            console.log(score + '----------map score-------------')
            //console.log(a + '-------------map a--------------')
          }
        }
      })

    })

    console.log("score of user => ", scoreNew)
    //console.log(var scoreNew = this.state.scores+10);
    var scoreNew = score
    this.setState({ scores: scoreNew })
    console.log(this.state.scores)

    this.setState({ show: true })
    this.setState({userName:localStorage.getItem("username")})
    this.setState({Subject:"JAVA"})
  }



  handleClose() {
    this.setState({ show: false })
    window.location = "./welcome"

    axios({
      method: 'POST',
      url: '/public/score',
      data: {

          username:this.state.userName,
          score:this.state.scores,
          subject:this.state.Subject
        
      }
    })
      .then(response => {
       console.log(response)               
       
      })
  }



  render() {
    return (
      <React.Fragment>
      <Timer />

        {this.state.javaquestions.map((e) => (
          <div key={e.qid} style={{ paddingLeft: "10px", paddingTop: "12px" }}>
            <h1 style={{ fontSize: "25px", color: "blue", border: "5px solid black", borderRadius: "10px", background: "white" }}>Q{e.qid + "    " + e.questions}</h1>
            <input className="inp" type="radio" id={e.qid} name={e.qid} value={e.option1} onChange={this.handleChange} />
            <label className="inp" for="html" style={{ color: "white", fontStyle: "initial", fontWeight: "bolder", fontSize: "1rem" }}>{e.option1} </label><br></br>
            <input className="inp" type="radio" id={e.qid} name={e.qid} value={e.option2} onChange={this.handleChange} />
            <label className="inp" for="css" style={{ color: "white", fontStyle: "initial", fontWeight: "bolder", fontSize: "1rem" }}>{e.option2}</label><br></br>
            <input className="inp" type="radio" id={e.qid} name={e.qid} value={e.option3} onChange={this.handleChange} />
            <label className="inp" for="css" style={{ color: "white", fontStyle: "initial", fontWeight: "bolder", fontSize: "1rem" }}>{e.option3}</label><br></br>
            <input className="inp" type="radio" id={e.qid} name={e.qid} value={e.option4} onChange={this.handleChange} />
            <label className="inp" for="css" style={{ color: "white", fontStyle: "initial", fontWeight: "bolder", fontSize: "1rem" }}>{e.option4}</label><br></br>



          </div>



        ))}

        <Button style={{ marginLeft: "60rem", width: "10%", }} variant="primary" onClick={this.f1}>Submit</Button>



        <Modal show={this.state.show}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.userName}:Your Score Out Of 100 is</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.scores}: Thanks forTaking the {this.state.Subject} quiz</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Close
            </Button>
           
          </Modal.Footer>
        </Modal>




      </React.Fragment>
    )
  }
}
export default JavaData;