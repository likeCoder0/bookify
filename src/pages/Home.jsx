import React from "react";
import { useState, useEffect } from "react";
import BookCard from "../components/Card";
import { useFirebase } from "../context/Firebase";
import CardGroup from 'react-bootstrap/CardGroup';

const HomePage = () => {
  const firebase = useFirebase();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    firebase.listAllBook().then((books) => setBooks(books.docs));
  }, []);
  return (
    <div className="container">
        <CardGroup>
      {books.map((book) => (
        <BookCard key={book.id} id={book.id} {...book.data()}/>
      ))}</CardGroup>
    </div>
  );
};

export default HomePage;
