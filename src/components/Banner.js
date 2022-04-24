import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import books from "../../static/sample.png"

const Banner = () => {
  return (
    <div className="container-fluid main">
      <section>
        <Container fluid>
          <Row>
            <Col className="main__textbox">
              <p className="read">Read, and learn in various formats</p>
              <h1 className="featured">Featured</h1>
              <h1 className="book">Book</h1>
              <p>
                This is a story about a little boy who learns that everything
                that is fun cannot always be found in a toy box, or even in a
                book. A story about a little red house with no windows, no
                doors, and a star inside.
              </p>
              <Button variant="outline-dark">Read More</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Banner
