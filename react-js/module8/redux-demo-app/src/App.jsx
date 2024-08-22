import React from 'react'
import Counter from './container/counterContainer'
import { Container} from 'react-bootstrap'

export default function App() {
  return (
    <div>
    <Container className='w-50 mx-auto bg-secondary text-dark p-5 mt-5'>

    <Counter />
    
    </Container>
    
    </div>
    
  )
}
