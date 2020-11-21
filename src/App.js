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
  const reload=()=>{
    setIscross(false)
    setWinmsg("")
    arr.fill("empty",0,9)
  }
  const checkwin=()=>{
    if(arr[0]==arr[1] && arr[0]==arr[2] && arr[0]!="empty")
      setWinmsg(`${arr[0]} wins`)
    if(arr[3]==arr[4] && arr[3]==arr[5] && arr[3]!="empty")
      setWinmsg(`${arr[3]} wins`)
    if(arr[6]==arr[7] && arr[6]==arr[8] && arr[6]!="empty")
      setWinmsg(`${arr[6]} wins`)
    if(arr[0]==arr[3] && arr[0]==arr[6] && arr[0]!="empty")
      setWinmsg(`${arr[0]} wins`)
    if(arr[1]==arr[4] && arr[1]==arr[7] && arr[1]!="empty")
      setWinmsg(`${arr[1]} wins`)
    if(arr[2]==arr[5] && arr[2]==arr[8] && arr[2]!="empty")
      setWinmsg(`${arr[2]} wins`)
    if(arr[0]==arr[4] && arr[0]==arr[8] && arr[0]!="empty")
      setWinmsg(`${arr[0]} wins`)
    if(arr[2]==arr[4] && arr[2]==arr[6] && arr[2]!="empty")
      setWinmsg(`${arr[2]} wins`)
  }
  const change=itemno=>{
        if(winmsg)
          return toast(winmsg,{type:"success"})

        if(arr[itemno] === "empty"){
          arr[itemno]= iscross ? "cross" : "circle"
          setIscross(!iscross)
        }
        else{
          return toast("already filled",{type:"error"})
        }
        checkwin();
  }
  return (
  <Container className='p-5'>
    <ToastContainer position="bottom-center"/>
    <Row>
    <Col md={6} className="offset-md-3">
      {winmsg ? (<div>
      <h1>{winmsg}</h1>
        <Button onClick={reload}>reload the game</Button>
        </div>) : (<h1>{iscross ? "cross" : "circle"} turns</h1>)}
    <div className="grid">  
    {arr.map((item,id)=>(
      <Card onClick={()=>change(id)}>
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
