import React from 'react';

import { Link } from 'react-router-dom'

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Banner from '../../assets/img/dasdasdigital/banner-02.jpg';
import Img01 from '../../assets/img/dasdasdigital/1-01.jpg';
import Img02 from '../../assets/img/dasdasdigital/1-02.jpg';
import Img03 from '../../assets/img/dasdasdigital/1-03.jpg';
import Img04 from '../../assets/img/dasdasdigital/1-04.jpg';
import Img05 from '../../assets/img/dasdasdigital/1-05.jpg';
import Img06 from '../../assets/img/dasdasdigital/1-06.jpg';
import Img07 from '../../assets/img/dasdasdigital/1-07.jpg';
import Img08 from '../../assets/img/dasdasdigital/1-08.jpg';

import styles from './pg2.module.css';
import './pg2.css';

import Vid1 from '../../assets/vids/compress_vid6.mp4';

import Codepen from "react-codepen-embed";

export const Pg2 = () => (
    /* Start of JSX Fragment*/ 
    <>

<Container fluid>
    {/* img without text */}
    <Row>
    <Col sm>
    <Image src={Banner} fluid className="pg1Img" />
    </Col>
    </Row>
  </Container>

<Jumbotron fluid className={styles.test}>
    <Container className={styles.fonttest}>
      <h5>Case Study</h5>
      <h1>DasDasDigital</h1>
      <p>
      Digital Agency Startup at Oakland, CA
      </p>
      <h5>Project Date:</h5>
      <p>
      October 2018 - January 2019
      </p>
      <h5>Role:</h5>
      <p>
      Web Developer for MVP built with React.JS and Bootstrap
      </p>
    </Container>
  </Jumbotron>

    <Container fluid>
      
        {/* img with text */}
        <Row>
    <Col sm>
      <h3>High-Fidelity UI Design</h3>
      <p>Series of various UI designs, Initially I designed some low level mockups that were
brought into the fold to be sued on the production application. It was a growing experience.
I worked on the onboarding of the mobile app. For this I designed it based on some sketches
and created a higher fidelity for them. After I created the Rapid Prototype for them using Proto.io.</p>
    <Image src={Img01} fluid className="pg1Img" />
    </Col>
    </Row>

    {/* img without text */}
    <Row>
        <Col sm>
        <Image src={Img02} fluid className="pg1Img" />
        </Col>
        </Row>

               {/* text */}
       <Row className={styles.test1}>
    <Col sm className={styles.fonttest}>
      <h3>High-Fidelity UI Design</h3>
      <p>Series of various UI designs, Initially I designed some low level mockups that were
brought into the fold to be sued on the production application. It was a growing experience.
I worked on the onboarding of the mobile app. For this I designed it based on some sketches
and created a higher fidelity for them. After I created the Rapid Prototype for them using Proto.io.</p>
    </Col>
    </Row>


    {/* img without text */}
    <Row>
        <Col sm>
        <Image src={Img03} fluid className="pg1Img" />
        </Col>
        </Row>

                {/* left text right img */}
                <Row>
        <Col sm>
        <h3>Development of
the MVP</h3>
        <p>After the designs were completed
they were sent over to me, and I started
with the development of the MVP.</p>
        </Col>
        <Col sm>
        <Image src={Img04} fluid className="pg1Img" />
        </Col>
        </Row>


            {/* codepen*/}
    <Row>
            <Col sm>
            <Codepen
            hash="WNrqqqe"
            user="jaemnkm"
            defaultTab="result"
            preview="false"
            height="600"
        />
            </Col>
        </Row>


    {/* Video */}
    <Row>
    <Col sm>
    <video autoPlay preload="true" loop playsInline muted>
      <source src={Vid1} type="video/mp4" />
    </video>
      </Col>
      </Row>

        {/* img with text */}
        <Row>
    <Col sm>
      <h3>Remote Team</h3>
      <p>The CEO was a software developer located in Oakland, there was a designer, a social media 
specialist who did the research for the personas, as well as a admin type of person who was
in charge of maintain admin stuff.</p>
    <Image src={Img05} fluid className="pg1Img" />
    </Col>
    </Row>

           {/* text */}
           <Row className={styles.test2}>
    <Col sm className={styles.fonttest}>
      <h3>High-Fidelity UI Design</h3>
      <p>Series of various UI designs, Initially I designed some low level mockups that were
brought into the fold to be sued on the production application. It was a growing experience.
I worked on the onboarding of the mobile app. For this I designed it based on some sketches
and created a higher fidelity for them. After I created the Rapid Prototype for them using Proto.io.</p>
    </Col>
    </Row>

    

      {/* img without text */}
      <Row>
        <Col sm>
        <Image src={Img06} fluid className="pg1Img" />
        </Col>
        </Row>

        {/* img with text */}
        <Row>
    <Col sm>
      <h3>Developing the Web Interface</h3>
      <p>The designer designed it based on Bootstrap 4 UI Components so developing the site was quite easy.
I created each page and created the fodler system. Then I implemented each page, using code. After 
the project was over I went back and I redesigned the home page and other pages, as well as 
putting the code base onto a React.JS folder system.</p>
    <Image src={Img07} fluid className="pg1Img" />
    </Col>
    </Row>

                {/* left text right img */}
                <Row>
        <Col sm>
        <h3>Completion of 
the MVP</h3>
        <p>The CEO didn’t move any farther 
with the project and it fell through it 
and didn’t go anywhere. We can say 
that the project was closed because of
lack of interest, or lack of effort, or 
people decided as a group that we were
going to come apart, maybe we didn’t
have enough funding.</p>
        </Col>
        <Col sm>
        <Image src={Img08} fluid className="pg1Img" />
        </Col>
        </Row>

    </Container>

    <Jumbotron fluid className={styles.bottomNav}>
  <Container>
    <Row>
    <Col sm={6}>
    <h1>Uguru, INC</h1>
    <Link to={'/pg1'}>
      <h5> View Previous </h5>
    </Link>
    </Col>
    <Col sm={6} >
    <h1>Sanchez Coffee Co.</h1>
    <Link to={'/pg3'}>
      <h5> View Next </h5>
    </Link>
    </Col>
    </Row>
  </Container>
</Jumbotron>

    </>
      /* End of JSX Fragment*/
)