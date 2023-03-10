import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useFirebase } from "../context/Firebase";

const BookCard = (props) => {
    const firebase=useFirebase();
    const [url,setURL]=useState(null);
    const navigate=useNavigate();

    useEffect(()=>{
        firebase.getImageURL(props.imageURL).then(url=>setURL(url));
    },[])
  return (
    <div>
      <Card style={{ width: "18rem",margin:"25px" }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            This book has a title {props.name} and this book is sold by{" "}
            {props.displayName} and this book is costs Rs. {props.price}
          </Card.Text>
          <Button variant="primary"  onClick={e=>navigate(`/book/view/${props.id}`)}>View</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookCard;
