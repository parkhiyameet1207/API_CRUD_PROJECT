import React, { useEffect, useState } from 'react'
import { Container, Row, Table } from 'react-bootstrap'
// import { Box, Button, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux'
import { Await, Link, useNavigate } from 'react-router-dom';
// import { getstudentAsync } from '../../Service/Action/Action'
// import '../View/view.css'
import axios from 'axios';
// import './Gita.css'
import { Box, Button, Modal, Typography } from "@mui/material";


function Gita() {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [hindi, setHindi] = useState("");
    const [english, setEnglish] = useState("");
    const [show, setShow] = useState(false);

    console.log(hindi);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 800,
        bgcolor: "background.paper",
        // border: '2px solid #000',
        boxShadow: 24,
        p:4

    };


    const getChapter = async () => {
        // const axios = require('axios');

        const options = {
            method: 'GET',
            url: 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/',
            params: { limit: '18' },
            headers: {
                'X-RapidAPI-Key': '380c32ff2cmshc76baa5be7ec576p163c94jsnc822cbe0e36b',
                'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
            }
        };
        // const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);

        try {
            const response = await axios.request(options);

            setData(response.data)
        } catch (err) {
            console.log(err);
        }
    };
    const handleOpen = (id) => {
        console.log(id);
        setHindi(data.filter((val) => val.id === id));
        setOpen(true);
    };
    const handleOpen1 = (id) => {
        setEnglish(data.filter((val) => val.id === id));
        setOpen1(true);
    };
    const handleClose = () => setOpen(false);

    const handleClose1 = () => setOpen1(false);

    useEffect(() => {
        getChapter();
    }, []);
    // getChapter();
    return (


        <Container>
            <Row className='d-flex justify-content-center mt-4'>

                {
                    data.map((val) => {
                        return (
                            <>
                                <div className="col-3 m-4">

                                    <div class="card dark">
                                        {/* <img src="https://codingyaar.com/wp-content/uploads/chair-image.jpg" class="card-img-top" alt="..."/> */}
                                        <div class="card-body">
                                            <div class="text-section p-2">
                                                <h5 class="card-title " >chapter {val.chapter_number}</h5>
                                                <h5 class="card-title  p-2" > {val.name}</h5>

                                                {/* <p class="card-text">{val.chapter_summary}</p> */}
                                            </div>
                                            <div class="cta-section">
                                                <Button
                                                    className="me-3"
                                                    variant="contained" onClick={() => handleOpen(val.id)}
                                                >
                                                    Hindi
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    color="success"
                                                    onClick={() => handleOpen1(val.id)}
                                                >
                                                    English
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </>

                        )
                    })
                }


                <Modal
              
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            नाम : {hindi[0]?.name}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {hindi[0]?.chapter_summary_hindi}
                        </Typography>
                    </Box>
                </Modal>
                <Modal
                    open={open1}
                    onClose={handleClose1}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Name : {english[0]?.name_translated}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {english[0]?.chapter_summary}
                        </Typography>
                    </Box>
                </Modal>


            </Row>

        </Container >
    )
}

export default Gita