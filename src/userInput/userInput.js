import React, {useState} from 'react'
import UserOutput from '../userOutput/userOutput'

const userInput = () => {
    const [state, setState] = useState('');
    return ( 
        <div>
            <input type="text" onChange={ (event) => setState(event.target.value)} value={ state } />
            <br/>
            <UserOutput  data={ state } />
        </div>
     )
}
export default userInput