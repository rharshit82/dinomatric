import React from 'react'
import {Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
const DinoFacts = () => {
    const history = useHistory()
    return (
        <div>
            <h2 className="my-4">Dino Facts</h2>
            <Button onClick={() => history.push('/dinofacts/generatefact')} variant="primary my-5">Generate Random Fact</Button>
        </div>
    )
}

export default DinoFacts
