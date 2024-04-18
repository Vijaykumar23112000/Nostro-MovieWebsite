import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from '../reviewform/ReviewForm'

import React from 'react'
import axios from "axios";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {

    const revText = useRef()
    let params = useParams()
    const movieId = params.movieId

    useEffect(() => {
        getMovieData(movieId)
    }, [])

    const addReview = async (e) => {
        e.preventDefault()
        const rev = revText.current

        const postData = {
            reviewBody: rev.value,
            imdbId: movieId
        }

        await axios.post("http://localhost:8080/api/v1/reviews", postData)
            .then(() => {
                console.log("Current reviews before update:", reviews);
                setReviews([...reviews, { body: rev.value }])
                console.log("Updated reviews:", [...reviews, { body: rev.value }]);
                rev.value = ""
            })
            .catch(err => console.log(err))

    }

    return (
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={movie?.poster} alt="img" />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a review ?" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {
                        reviews?.map(r => {
                            return (
                                <>
                                    <Row>
                                        <Col>{r.body}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews
