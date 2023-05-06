import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import UserForm from './UserForm';
import { ADD } from '../redux/actions/action';

const DetailPage = () => {
    const [flag, setFlag] = useState(true)
    const getData = useSelector((state => state.moviereducer.movies))
    const Dispatch = useDispatch();


    const handleForm = (ele) => {
        Dispatch(ADD(ele))
        console.log(ele.show)
        setFlag(current => !current)
    }

    return (
        <>
            {flag ? <div className='detailWrap'>
                {getData && getData.map((ele, id) => {
                    return (
                        <Card className='cardBody' key={id}>
                            <img alt='' src={ele?.show?.image?.original} variant="top" />
                            <Card.Body>
                                <Card.Title>{ele.show.name}</Card.Title>
                                <Card.Title>Date Aired: {ele.show.premiered}</Card.Title>
                                <Card.Title>Genres: {ele.show.genres + ','}</Card.Title>
                                <Card.Text>
                                    {ele.show.summary}
                                </Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <Button variant="primary">
                                        <Link className='text-white' to="/">Go back</Link>
                                    </Button>
                                    <Button onClick={() => handleForm(ele)} variant="secondary">Book Now</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    )
                })}

            </div>
                :
                <UserForm />}
        </>
    )
}

export default DetailPage