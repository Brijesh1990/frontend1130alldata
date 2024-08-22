import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function Counter(props) {
const {counter, increment,decrement,reset }=props;
  return (
    <div>
    <Container>
        <Row>
            <div className='col-md-4 p-4'><h3 className='text-center'>Counter App</h3></div>
            <div className='col-md-8'>
                <div className='text-center'>
                    {counter}
                </div>
                <div>
                    <Row>
                        <button type='button' className='btn btn-sm ms-2 btn-primary text-white mt-2' onClick={increment}>+</button>
                        
                        <button type='button' className='btn btn-sm ms-2 btn-primary text-white mt-2' onClick={decrement}>-</button>
                        
                        <button type='button' className='btn btn-sm ms-2 btn-danger text-white mt-2' onClick={reset}>Reset</button>
                    </Row>
                </div>
            </div>
        </Row>
    </Container>
      
    </div>
  )
}
