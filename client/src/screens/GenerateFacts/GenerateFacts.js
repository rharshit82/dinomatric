import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Card,Button} from 'react-bootstrap'
import dino from './dino.jpg'
import Loading from '../../components/Loading'

const GenerateFacts = () => {
    const [phone,setPhone]=useState("")
    const [fact,setFact]=useState("")
    const [messageSent,setMessageSent]=useState(false);
    useEffect(() => {
        const getFact = async () =>{
            const res = await axios.get('/api/getfact')
            setFact(res.data.fact)
            console.log(res.data.fact)
        }
        getFact()
    }, [])
    const sendMessage = async () =>{
        const msg = await axios.post('/api/sendmessage', {phone})
        setMessageSent(true)
    }
    return (
        <div>
            <h2 className="my-4">Dino Fact</h2>
            {fact.length>1? <Card className="d-block mx-auto">
  <Card.Img variant="top" src={dino} className="h-50 w-25 d-inline-block" />
  <Card.Body>
    <Card.Text> <h3>{fact}</h3>
      
    </Card.Text>
    {messageSent? (<h3 className="text-center my-4">Your message has been sent </h3>):
    <div className="d-flex flex-column">
    <form>
    <label htmlFor="phone">Enter your Friend's Phone number with STD Code</label>
    <input type="text" className="my-4 w-25 d-block mx-auto" value={phone} onChange={(e) =>setPhone(e.target.value)} />
    <Button onClick={sendMessage} variant="primary" className="w-25 d-block mx-auto">Send to your Friend</Button>
    </form>
    </div>
    }
    
  </Card.Body>
</Card> : <div className="my-5"> <Loading /> </div> }
            
        </div>
    )
}

export default GenerateFacts

