import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

const Hero = () => {
    const [data, setData] = useState([])
    const Dispatch = useDispatch();

    const fetchData = () => {
        return axios.get("https://api.tvmaze.com/search/shows?q=all")
            .then((response) => setData(response.data));
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log(data)

    const handleClick = (ele => {
        Dispatch(ADD(ele))
    })

    return (
        <div className='heroWrap'>
            <div className='cardWrap'>
                {
                    data && data.map((ele, id) => {
                        return (
                            <Card key={id} style={{ width: '18rem' }}>
                                <Card.Img src={ele?.show?.image?.original} variant="top" />
                                <Card.Body>
                                    <Card.Title>{ele.show.name}</Card.Title>
                                    <Card.Text>
                                        Genres: {ele.show.genres + ','}
                                    </Card.Text>
                                    <Button onClick={() => handleClick(ele)} variant="primary">
                                        <Link className='text-white' to='/detail'>Read More</Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Hero