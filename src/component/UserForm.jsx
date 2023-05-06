import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserForm = () => {
    const getData = useSelector((state => state.moviereducer.movies))
    const [flag, setFlag] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [ticket, setTicket] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("Username", JSON.stringify(name))
        localStorage.setItem("Email", JSON.stringify(email))
        localStorage.setItem("Tickets", JSON.stringify(ticket))
        setFlag(false)
    }

    return (
        <>
            {flag ? <div className='detailWrap'>
                {getData && getData.map((ele, id) => {
                    return (
                        <div key={id} style={{
                            display: 'block',
                            width: 700,
                            padding: 30,
                            backgroundColor: 'white'
                        }}>
                            <h4>{ele.show.name}</h4>
                            <Form onSubmit={(e) => handleSubmit(e)}>
                                <Form.Group>
                                    <Form.Label>Enter your full name:</Form.Label>
                                    <Form.Control onChange={(e) => setName(e.target.value)} value={name} type="text"
                                        placeholder="Enter your full name" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Enter your email address:</Form.Label>
                                    <Form.Control onChange={(e) => setEmail(e.target.value)} value={email} type="email"
                                        placeholder="Enter your your email address" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Enter number of tickets:</Form.Label>
                                    <Form.Control onChange={(e) => setTicket(e.target.value)} value={ticket} type="number" placeholder="Enter number of tickets" />
                                </Form.Group>
                                <Button className='mt-5' variant="primary" type="submit">
                                    Confirm
                                </Button>
                            </Form>
                        </div >
                    )
                })}

            </div >
                :
                <div className='detailWrap'>
                    <div className='formSuccess'>
                        <h1>Your details have been saved</h1>
                        <Button className='mt-4'>
                            <Link className='text-white mt' to='/'>Go home</Link>
                        </Button>
                    </div>
                </div>
            }
        </>
    )
}

export default UserForm