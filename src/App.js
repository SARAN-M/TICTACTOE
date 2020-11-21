import logo from './logo.svg';
import React,{useState} from "react"
import Icons from "./components/icon"
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {Card, CardBody,Container,Button,Col,Row} from "reactstrap"
import "bootstrap/dist/css/bootstrap.css"
import './App.css';
const arr=new Array(9).fill("empty");
function App() {
  const [iscross,setIscross]= useState(false)
  const [winmsg,setWinmsg]=useState("")
  return (
  <Container className='p-5'>
    <ToastContainer position="bottom-center"/>
    <Row>
    <Col md={6} className="offset-md-3">
    <div className="grid">  
    {arr.map((item,id)=>(
      <Card>
        <CardBody className='box'>
       <Icons name={item}/>
        </CardBody>
      </Card>

    ))}
        </div>  
    </Col>
    </Row>
  </Container>
  );
}

export default App;
