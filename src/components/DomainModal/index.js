import React, { useState, useRef } from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';



import { createDomain } from '../../requests/DomainRequests';



function DomainModal({ setModalVisible }) {
    const [name, setName] = useState(null);
    const [size, setSize] = useState(null);

    const createDomainCb = () => {
        console.log("createDomainCb");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const bodyData = {
            name,
            size
        }
        createDomain(bodyData, createDomainCb);
    }


    return (
        <Modal show={true}>
            <Modal.Header>Create Domain</Modal.Header>
            <Modal.Body>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <Row>
                                    <Col md={6}>
                                        <label>Name</label>
                                    </Col>
                                    <Col md={6}>
                                        <input name="name" type="text" className="form-control" placeholder="Enter auction name" onChange={e => setName(e.target.value)} />
                                    </Col>
                                </Row>
                            </div>
                            <div className="form-group">
                                <Row>
                                    <Col md={6}>
                                        <label>Size</label>
                                    </Col>
                                    <Col md={6}>
                                        <input name="name" type="text" className="form-control" placeholder="Enter auction name" onChange={e => setSize(e.target.value)} />
                                    </Col>
                                </Row>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button>Cancel</button>
                <button>Save</button>
            </Modal.Footer>
        </Modal>
    )
}

export default DomainModal;