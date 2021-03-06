// import React from "react";
// import Book from "./Book";
import book1 from '../images/bookCovers/got.jpeg';
import book2 from '../images/bookCovers/jobs.jpeg';
import book3 from '../images/bookCovers/hungergames.jpeg';
import book4 from '../images/bookCovers/finding.jpeg';
import book5 from '../images/bookCovers/veg.png';
import book6 from '../images/bookCovers/sin.jpeg';
import book7 from '../images/bookCovers/queenie.jpeg';
import book8 from '../images/bookCovers/hpstone.jpeg';
import book9 from '../images/bookCovers/grimoire.jpeg';
import book10 from '../images/bookCovers/obama.jpeg';
import book11 from '../images/bookCovers/musk.jpeg';
import book12 from '../images/bookCovers/einstein.jpeg';
import book13 from '../images/bookCovers/stranger.jpeg';
import book14 from '../images/bookCovers/knot.jpeg';

const Bdata = [
  {
    id: 0,
    price: 499,
    authorN: 'George R.R. Martin',
    imgsrc: book1,
    booklink: '/book/book1',
    bookN: 'A Game Of Thrones',
    topSeller: true,
    trueCrime: false,
    fiction: true,
    mystery: true,
    biographies: true,
    bookDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting idustry. Lorem Ipsum has been the idustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },

  {
    id: 1,
    price: 499,
    authorN: 'Walter Isaacson',
    imgsrc: book2,
    booklink: '/book/book2',
    bookN: 'Steve Jobs',
    topSeller: true,
    trueCrime: true,
    fiction: false,
    mystery: false,
    biographies: false,
    bookDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting idustry. Lorem Ipsum has been the idustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 2,
    price: 499,
    authorN: 'Suzanne Collins',
    imgsrc: book3,
    booklink: '/book/book3',
    bookN: 'Catching Fire',
    topSeller: false,
    trueCrime: true,
    fiction: true,
    mystery: false,
    biographies: false,
    bookDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting idustry. Lorem Ipsum has been the idustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 3,
    price: 499,
    authorN: 'James Halemanu',
    imgsrc: book4,
    booklink: '/book/book4',
    bookN: 'Fiding Moana',
    topSeller: false,
    trueCrime: false,
    fiction: true,
    mystery: true,
    biographies: true,
    bookDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting idustry. Lorem Ipsum has been the idustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 4,
    price: 499,
    authorN: 'Han Kang',
    imgsrc: book5,
    booklink: '/book/book5',
    bookN: 'The Vegetarian',
    topSeller: false,
    trueCrime: false,
    fiction: false,
    mystery: false,
    biographies: false,
    bookDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting idustry. Lorem Ipsum has been the idustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 5,
    price: 499,
    authorN: 'Megan Campisi',
    imgsrc: book6,
    booklink: '/book/book6',
    bookN: 'Sin Eater',
    topSeller: false,
    trueCrime: false,
    fiction: true,
    mystery: true,
    biographies: true,
    bookDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting idustry. Lorem Ipsum has been the idustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 6,
    price: 499,
    authorN: 'Candice Carty-Williams',
    imgsrc: book7,
    booklink: '/book/book7',
    bookN: 'Queenie',
    topSeller: false,
    trueCrime: true,
    fiction: true,
    mystery: false,
    biographies: false,
    bookDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting idustry. Lorem Ipsum has been the idustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 7,
    price: 499,
    authorN: 'J.K. Rowling',
    imgsrc: book8,
    booklink: '/book/book8',
    bookN: "Harry Potter and the Philosopher's Stone",
    topSeller: true,
    trueCrime: true,
    fiction: true,
    mystery: false,
    biographies: false,
    bookDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting idustry. Lorem Ipsum has been the idustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 8,
    price: 499,
    authorN: 'D.S. Quinton',
    imgsrc: book9,
    booklink: '/book/book9',
    bookN: 'A Grimoire Dark',
    topSeller: true,
    trueCrime: false,
    fiction: true,
    mystery: true,
    biographies: false,
    bookDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting idustry. Lorem Ipsum has been the idustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 9,
    price: 499,
    authorN: 'Barack Obama',
    imgsrc: book10,
    booklink: '/book/book10',
    bookN: 'A promised Land',
    topSeller: true,
    trueCrime: true,
    fiction: false,
    mystery: false,
    biographies: true,
    bookDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting idustry. Lorem Ipsum has been the idustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 10,
    price: 499,
    authorN: 'Ashlee Vance',
    imgsrc: book11,
    booklink: '/book/book11',
    bookN: 'Elon Musk',
    topSeller: true,
    trueCrime: false,
    fiction: false,
    mystery: false,
    biographies: true,
    bookDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting idustry. Lorem Ipsum has been the idustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 11,
    price: 499,
    authorN: 'Walter Isaacson',
    imgsrc: book12,
    booklink: '/book/book12',
    bookN: 'Einstein',
    topSeller: true,
    trueCrime: false,
    fiction: false,
    mystery: false,
    biographies: true,
    bookDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting idustry. Lorem Ipsum has been the idustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 12,
    price: 499,
    authorN: 'Ann Rule',
    imgsrc: book13,
    booklink: '/book/book13',
    bookN: 'The Stranger Beside Me',
    topSeller: true,
    trueCrime: true,
    fiction: false,
    mystery: true,
    biographies: false,
    bookDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting idustry. Lorem Ipsum has been the idustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 13,
    price: 499,
    authorN: 'Mara Leveritt',
    imgsrc: book14,
    booklink: '/book/book14',
    bookN: "Devil's Knot",
    topSeller: true,
    trueCrime: true,
    fiction: false,
    mystery: true,
    biographies: false,
    bookDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting idustry. Lorem Ipsum has been the idustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 14,
    price: 499,
    authorN: 'Barack Obama',
    imgsrc: book10,
    booklink: '/book/book15',
    bookN: 'A promised Land',
    topSeller: true,
    trueCrime: true,
    fiction: false,
    mystery: false,
    biographies: false,
    bookDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting idustry. Lorem Ipsum has been the idustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 15,
    price: 499,
    authorN: 'Barack Obama',
    imgsrc: book10,
    booklink: '/book/book16',
    bookN: 'A promised Land',
    topSeller: true,
    trueCrime: true,
    fiction: false,
    mystery: false,
    biographies: false,
    bookDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting idustry. Lorem Ipsum has been the idustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

export default Bdata;
