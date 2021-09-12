import React,{useState} from 'react'
import {Card,Button} from 'react-bootstrap'



const DinoShowcase = () => {
  const [like1,setLike1]=useState(0);
  const [like2,setLike2]=useState(0);
  const [like3,setLike3]=useState(0);
  const [like4,setLike4]=useState(0);
    return (
        <div>
            <h1 className="my-5">Dino E-Museum</h1>
            <Card className="d-block mx-auto" >
            <iframe sandbox="allow-scripts allow-same-origin allow-popups allow-forms" frameborder="0" width="500" height="600" src="https://sketchfab.com/models/516dbe9717554e74b0bfcbb77a431b17/embed"></iframe>
            <Card.Body>
                <Card.Title>Tyrannosaurus Rex</Card.Title>
                <Card.Text>
                Tyrannosaurus is a genus of tyrannosaurid theropod dinosaur. The species Tyrannosaurus rex, often called T. rex or colloquially T-Rex, is one of the best represented of these large theropods. 
                </Card.Text>
                <Card.Text> Likes: {like1}
                </Card.Text>
                <Button onClick={() =>setLike1(like1+1)}variant="primary">Upvote</Button>
              </Card.Body>
            </Card>
            <Card className="d-block mx-auto" >
            <iframe sandbox="allow-scripts allow-same-origin allow-popups allow-forms" frameborder="0" width="500" height="400" src="https://sketchfab.com/models/13fa2131ada14963bd095ea39fe39c02/embed"></iframe>
            <Card.Body>
                <Card.Title>Spinosaurus</Card.Title>
                <Card.Text>Spinosaurus is a genus of spinosaurid dinosaur that lived in what now is North Africa during the Cenomanian to upper Turonian stages of the Late Cretaceous period, about 99 to 93.5 million years ago.
                </Card.Text>
                <Card.Text> Likes: {like2}
                </Card.Text>
                <Button onClick={() =>setLike2(like2+1)}variant="primary">Upvote</Button>
              </Card.Body>
            </Card>
            <Card className="d-block mx-auto" >
            <iframe sandbox="allow-scripts allow-same-origin allow-popups allow-forms" frameborder="0" width="500" height="400" src="https://sketchfab.com/models/3aba8c3fd175480b89f87252c53854bf/embed"></iframe>
            <Card.Body>
                <Card.Title>Utahraptor</Card.Title>
                <Card.Text>
                Utahraptor is a genus of large dromaeosaurid dinosaur that lived in North America during the Early Cretaceous period
                </Card.Text>
                <Card.Text> Likes: {like3}
                </Card.Text>
                <Button onClick={() =>setLike3(like3+1)}variant="primary">Upvote</Button>
              </Card.Body>
            </Card>
            <Card className="d-block mx-auto" >
            <iframe sandbox="allow-scripts allow-same-origin allow-popups allow-forms" frameborder="0" width="500" height="400" src="https://sketchfab.com/models/02fa50fae031447c98e56d1710e9fbe2/embed"></iframe>
            <Card.Body>
                <Card.Title>Velociraptor</Card.Title>
                <Card.Text>
                Velociraptor was probably one of the more intelligent dinosaurs, because it had a large brain proportionate to its body size.
                </Card.Text>
                <Card.Text> Likes: {like4}
                </Card.Text>
                <Button onClick={() =>setLike4(like4+1)}variant="primary">Upvote</Button>
              </Card.Body>
            </Card>
           
        </div>
    )
}

export default DinoShowcase
