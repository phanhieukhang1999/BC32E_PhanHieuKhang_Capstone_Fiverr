import React from 'react'
import { Card } from "react-bootstrap";

export default function ItemJob() {
    return (
        <div className="px-3 py-3" >
            <Card>
                <Card.Img
                    role="button"
                    height={200}
                    variant="top"
                    src='https://picsum.photos/200/200'
                />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text role="button">
                        <span className="limit-line h5" style={{ height: "2.8rem", WebkitLineClamp: 2 }}>

                        </span>
                    </Card.Text>
                    <div className="h6">
                        <span className="mr-1">
                            <i className=" text-warning fas fa-star"></i>
                        </span>
                        <span className="text-warning mr-1">123</span>
                        <span className="text-muted">(123)</span>
                    </div>
                </Card.Body>
                <div className="d-flex justify-content-between align-items-center px-3 py-1 border border-top-secondary border-right-0 border-left-0 border-bottom-0">
                    <span className="h4 mb-0 text-muted">
                        <i className="fas fa-heart"></i>
                    </span>
                    <div className=" align-items-center">
                        <span className="h6">STARTING AT</span>
                        <span className="h4 ml-1">123</span>
                    </div>
                </div>
            </Card>
        </div>
    )
}
