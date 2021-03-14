// import React from "react";
// import Book from "./Book";
import book1 from "../bookC/got.jpeg";
import book2 from "../bookC/jobs.jpeg";
import book3 from "../bookC/hungergames.jpeg";
import book4 from "../bookC/finding.jpeg";
import book5 from "../bookC/veg.png";
import book6 from "../bookC/sin.jpeg";
import book7 from "../bookC/queenie.jpeg";
import book8 from "../bookC/hpstone.jpeg";
import book9 from "../bookC/grimoire.jpeg";
import book10 from "../bookC/obama.jpeg";
import book11 from "../bookC/musk.jpeg";
import book12 from "../bookC/einstein.jpeg";
import book13 from "../bookC/stranger.jpeg";
import book14 from "../bookC/knot.jpeg";
// import {NavLink} from "react-router-dom";

const Bdata = [
    {
        ind: 0,
        authorN: "George R.R. Martin",
        imgsrc: book1,
        booklink: "/",
        bookN: "A Game Of Thrones",
        topSeller: true,
        trueCrime: false,
        fiction: true,
        mystery: true,
        biographies: true,
        bookDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        ind: 1,
        authorN: "Walter Isaacson",
        imgsrc: book2,
        booklink: "/",
        bookN: "Steve Jobs",
        topSeller: true,
        trueCrime: true,
        fiction: false,
        mystery: false,
        biographies: false,
        bookDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        ind: 2,
        authorN: "Suzanne Collins",
        imgsrc: book3,
        booklink: "/",
        bookN: "Catching Fire",
        topSeller: false,
        trueCrime: true,
        fiction: true,
        mystery: false,
        biographies: false,
        bookDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        ind: 3,
        authorN: "James Halemanu",
        imgsrc: book4,
        booklink: "/",
        bookN: "Finding Moana",
        topSeller: false,
        trueCrime: false,
        fiction: true,
        mystery: true,
        biographies: true,
        bookDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        ind: 4,
        authorN: "Han Kang",
        imgsrc: book5,
        booklink: "/",
        bookN: "The Vegetarian",
        topSeller: false,
        trueCrime: false,
        fiction: false,
        mystery: false,
        biographies: false,
        bookDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        ind: 5,
        authorN: "Megan Campisi",
        imgsrc: book6,
        booklink: "/",
        bookN: "Sin Eater",
        topSeller: false,
        trueCrime: false,
        fiction: true,
        mystery: true,
        biographies: true,
        fictionsc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        ind: 6,
        authorN: "Candice Carty-Williams",
        imgsrc: book7,
        booklink: "/",
        bookN: "Queenie",
        topSeller: false,
        trueCrime: true,
        fiction: true,
        mystery: false,
        biographies: false,
        bookDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        ind: 7,
        authorN: "J.K. Rowling",
        imgsrc: book8,
        booklink: "/",
        bookN: "Harry Potter and the Philosopher's Stone",
        topSeller: true,
        trueCrime: true,
        fiction: true,
        mystery: false,
        biographies: false,
        bookDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        ind: 8,
        authorN: "D.S. Quinton",
        imgsrc: book9,
        booklink: "/",
        bookN: "A Grimoire Dark",
        topSeller: true,
        trueCrime: false,
        fiction: true,
        mystery: true,
        biographies: false,
        bookDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        ind: 9,
        authorN: "Barack Obama",
        imgsrc: book10,
        booklink: "/",
        bookN: "A promised Land",
        topSeller: true,
        trueCrime: true,
        fiction: false,
        mystery: false,
        biographies: true,
        bookDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        ind: 10,
        authorN: "Ashlee Vance",
        imgsrc: book11,
        booklink: "/",
        bookN: "Elon Musk",
        topSeller: true,
        trueCrime: false,
        fiction: false,
        mystery: false,
        biographies: true,
        bookDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        ind: 11,
        authorN: "Walter Isaacson",
        imgsrc: book12,
        booklink: "/",
        bookN: "Einstein",
        topSeller: true,
        trueCrime: false,
        fiction: false,
        mystery: false,
        biographies: true,
        bookDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        ind: 12,
        authorN: "Ann Rule",
        imgsrc: book13,
        booklink: "/",
        bookN: "The Stranger Beside Me",
        topSeller: true,
        trueCrime: true,
        fiction: false,
        mystery: true,
        biographies: false,
        bookDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        ind: 13,
        authorN: "Mara Leveritt",
        imgsrc: book14,
        booklink: "/",
        bookN: "Devil's Knot",
        topSeller: true,
        trueCrime: true,
        fiction: false,
        mystery: true,
        biographies: false,
        bookDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        ind: 14,
        authorN: "Barack Obama",
        imgsrc: book10,
        booklink: "/",
        bookN: "A promised Land",
        topSeller: true,
        trueCrime: true,
        fiction: false,
        mystery: false,
        biographies: false,
        bookDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        ind: 15,
        authorN: "Barack Obama",
        imgsrc: book10,
        booklink: "/",
        bookN: "A promised Land",
        topSeller: true,
        trueCrime: true,
        fiction: false,
        mystery: false,
        biographies: false,
        bookDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
];

export default Bdata;