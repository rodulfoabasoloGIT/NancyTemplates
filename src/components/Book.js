import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Samplebook from "../../static/sample2.png"
import barnes from "../../static/barns.png"
import amazon from "../../static/amaz1.png"
import bam from "../../static/bam1.png"
import goodreads from "../../static/goodreads1.png"
const Book = () => {
  return (
    <div className="container-fluid Authorbook" id="book">
      <Container fluid>
        <Row>
          <Col md={12} lg={6} className="Authorbook__Bookdesc">
            <img src={Samplebook} className="samplebook" />
          </Col>
          <Col md={12} lg={6} className="Authorbook__Samplebook">
            <h1 className="Aboutbookheader">About the book</h1>
            <p className="Aboutbook">
              This is a story about a little boy who learns that everything that
              is fun cannot always be found in a toy box, or even in a book. A
              story about a little red house with no windows, no doors, and a
              star inside. Jimmy starts out on an adventure that takes him many
              places, meets many people, and learns to trust in others as well
              as himself. This is a wonderful story about the love and trust a
              mother has for her son. Also, a story about always believing in
              yourself and anything is possible.
            </p>
            <div className="store container-fluid">
              {/* <h3>Book Available in</h3> */}
              <h2 className="headings">Ebook</h2>
              <img className="logos" src={amazon} />
              <img className="logos" src={barnes} />
              <h2 className="headings">Paperback</h2>
              <img className="logos" src={amazon} />
              <img className="logos" src={barnes} />
              <img className="logos" src={bam} />
              <img className="logos" src={goodreads} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Book
