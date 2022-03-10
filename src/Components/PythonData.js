import React, { Component, Fragment } from 'react'
import '../Css/CssData.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Timer from './Timer';

import { Modal, ModalBody } from 'react-bootstrap'





var score = 0;
var a = score;
var count = 0;
export default class PythonData extends Component {


    data = []; //empty arry for storing the user input


    constructor() {
        super()
        this.state = {

            Pythonquestions: [],
            correctanswer: '',
            scores: 0,
            popup: false,
            //new username static value for testing
            userName:"",
            Subject:""





        }
        this.handleChange = this.handleChange.bind(this);
        this.test = this.test.bind(this);
        this.handleClose = this.handleClose.bind(this)
    }

    componentDidMount() {
        axios.get("/private/quizdata/pythonquestions",{
            auth:{
                username:localStorage.getItem("username"),
                password:localStorage.getItem("password")
            }
        })
            .then(response => {
                console.log(response)
                //console.log(data.correctAnswer)
                this.setState({ Pythonquestions: response.data })
            }).catch(console.log());
    }

    handleChange = e => {
        console.log(e)
        console.log(a + '===========================')

        this.data.push({
            "id": e.target.id,
            "selectedvalue": e.target.value
        })

        //this.exexcute()






    };


    test() {
        console.log("data")
        score = 0;

        //this.setState({ point: score })

        //w,index
        //  index =0
        //  id=1
        //forloop
        this.state.Pythonquestions.map(w => {

            this.data.map(f => {

                if (w.qid == f.id) {
                    if (w.correctAnswer == f.selectedvalue) {
                        score = score + 10;
                        console.log(score + '----------map score-------------')
                        console.log(a + '-------------map a--------------')
                    }
                }
            })

        })

        console.log("score of user => ", score)
        //console.log(var scoreNew = this.state.scores+10);
        var scoreNew = score
        this.setState({ scores: scoreNew })
        console.log(this.state.scores)

        this.setState({ popup: true })
        //setstate for static value
        this.setState({userName:localStorage.getItem("username")})
        this.setState({Subject:"python"})



    }



    handleClose() {
        this.setState({ popup: false })
        window.location = "./welcome";

        //new code for post score
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


        // const t =this.state.correctanswer;
        return (

            <React.Fragment>
                <Timer />






                {this.state.Pythonquestions.map((e) => (



                    <div key={e.qid} style={{ paddingLeft: "10px", paddingTop: "12px" }}>





                        <h1 style={{ fontSize: "25px", color: "blue", border: "5px solid black", borderRadius: "10px", background: "white" }}>Q{e.qid + "    " + e.questions}</h1>
                        <input className="inp" type="radio" id={e.qid} name={e.qid} value={e.option1} onChange={this.handleChange} />
                        <label className="inp" for="option1" style={{ color: "white", fontStyle: "initial", fontWeight: "bolder", fontSize: "1rem" }}>{e.option1}</label><br></br>

                        <input className="inp" type="radio" id={e.qid} name={e.qid} value={e.option2} onChange={this.handleChange} />
                        <label className="inp" for="option2" style={{ color: "white", fontStyle: "initial", fontWeight: "bolder", fontSize: "1rem" }}>{e.option2}</label><br></br>

                        <input className="inp" type="radio" id={e.qid} name={e.qid} value={e.option3} onChange={this.handleChange} />
                        <label className="inp" for="option3" style={{ color: "white", fontStyle: "initial", fontWeight: "bolder", fontSize: "1rem" }}>{e.option3}</label><br></br>

                        <input className="inp" type="radio" id={e.qid} name={e.qid} value={e.option4} onChange={this.handleChange} />
                        <label className="inp" for="option4" style={{ color: "white", fontStyle: "initial", fontWeight: "bolder", fontSize: "1rem" }}>{e.option4}</label><br></br>




                    </div>






                ))}


                <Button style={{ marginLeft: "60rem", width: "10%", }} variant="primary" onClick={this.test} >Submit</Button>


                <Modal show={this.state.popup} onClick={this.handleClose}>
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
