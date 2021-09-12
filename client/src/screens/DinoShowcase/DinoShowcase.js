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
            <iframe sandbox="allow-scripts allow-same-origin allow-popups allow-forms" frameborder="0" width="500" height="400" src="https://sketchfab.com/models/516dbe9717554e74b0bfcbb77a431b17/embed"></iframe>
            <Card.Body>
                <Card.Title>Tyrannosaurus Rex</Card.Title>
                <Card.Text>
                Tyrannosaurus is a genus of tyrannosaurid theropod dinosaur. The species Tyrannosaurus rex, often called T. rex or colloquially T-Rex, is one of the best represented of these large theropods. 
                </Card.Text>
                <Card.Text> Likes: {like2}
                </Card.Text>
                <Button onClick={() =>setLike2(like2+1)}variant="primary">Upvote</Button>
              </Card.Body>
            </Card>
            <Card className="d-block mx-auto" >
            <iframe sandbox="allow-scripts allow-same-origin allow-popups allow-forms" frameborder="0" width="500" height="400" src="https://sketchfab.com/models/516dbe9717554e74b0bfcbb77a431b17/embed"></iframe>
            <Card.Body>
                <Card.Title>Tyrannosaurus Rex</Card.Title>
                <Card.Text>
                Tyrannosaurus is a genus of tyrannosaurid theropod dinosaur. The species Tyrannosaurus rex, often called T. rex or colloquially T-Rex, is one of the best represented of these large theropods. 
                </Card.Text>
                <Card.Text> Likes: {like3}
                </Card.Text>
                <Button onClick={() =>setLike3(like3+1)}variant="primary">Upvote</Button>
              </Card.Body>
            </Card>
            <Card className="d-block mx-auto" >
            <iframe sandbox="allow-scripts allow-same-origin allow-popups allow-forms" frameborder="0" width="500" height="400" src="https://sketchfab.com/models/516dbe9717554e74b0bfcbb77a431b17/embed"></iframe>
            <Card.Body>
                <Card.Title>Tyrannosaurus Rex</Card.Title>
                <Card.Text>
                Tyrannosaurus is a genus of tyrannosaurid theropod dinosaur. The species Tyrannosaurus rex, often called T. rex or colloquially T-Rex, is one of the best represented of these large theropods. 
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
