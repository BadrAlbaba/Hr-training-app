const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
let i = true;

const apllicantsData = 
[
    {
        id: 1,
        image: "Martijn",
        name: "Martijn Klaver",
        live: "Amesterdam",
        age: "32 Years",
        nationility: "Dutch",
        experience: "8 years in Product Mang",
        degree: "Bachelors in Marketing",
        skills: "Market Research, Analytical Skills, Time Management, Communications, Presentation, Negotiation"
    },

    {
        id: 2,
        image: "Sonya",
        name: "Sonya Shee",
        live: "Arnhem",
        age: "28 Years",
        lnationilityanguage: "Indonesian",
        experience: "5 years in Product Mang",
        degree: "Business Management",
        skills: "Strategy, Roadmaps, Leadership, research, Presentation, Project Management"
    },

    {
        id: 3,
        image: "Marijne",
        name: "Marijne Kruse",
        live: "Almere",
        age: "26 Years",
        nationility: "Dutch",
        experience: "4 years in Product Mang",
        degree: "Engineering Management",
        skills: "Agile, Software, Testing, Team leading, Analytical skills, Business skills"
    },

    {
        id: 4,
        image: "Obinna",
        name: "Obinna Iblo",
        live: "Rotterdam",
        age: "38 Years",
        language: "Nigerian",
        experience: "12 years in Software",
        degree: " Computer Science",
        skills: "Product, Software, Agile, Roadmaps, Team leading, Delegation"
    },

    {
        id: 5,
        image: "Adil",
        name: "Adil Omar",
        live: "Amesterdam",
        age: "48 Years",
        nationility: "Moroccan",
        experience: "26 years in Product Mang",
        degree: " Bachelor in Mathematics",
        skills: "Design, Roadmaps, Agile/Scrum, User focused, Data Analytics, Software"
    },

    {
        id: 6,
        image: "Bart",
        name: "Bart van Dinter",
        live: "Den Haag",
        age: "51 Years",
        nationility: "Dutch",
        experience: "18 years in Software",
        degree: " MBA/ Bach. Computer Science ",
        skills: "Management, Leadership, Software, Story telling, Customer focus, Negotiation"
    },

    {
        id: 7,
        image: "Emre",
        name: "Emre Kaplan",
        live: "Utrecht",
        age: "34 Years",
        nationility: "Turkish",
        experience: "8 years in Product Mang",
        degree: " Masters in Computer Science ",
        skills: "Software, Project Management, Leadership, Communications, Roadmaps, Negotiation"
    },

    {
        id: 8,
        image: "Rebecca",
        name: "Rebecca Vera",
        live: "Maastricht",
        age: "31 Years",
        nationility: "Spanish",
        experience: "7 years in Technology Mng",
        degree: " Masters in Management ",
        skills: "Product, Data Analytics, Machine Learning, AI, Agile, Team leading"
    },


    {
        id: 9,
        image: "Eliza",
        name: "Eliza Van Oort",
        live: "Rotterdam",
        age: "36 Years",
        nationility: "Dutch",
        experience: "13 years in Software",
        degree: " Msc in Computer Science",
        skills: "Javascript, Automated Testing, HTML/CSS, Python, Technical management, Mobile Development"
    },

    {
        id: 10,
        image: "Asha",
        name: "Asha Elvira",
        live: "Amsterdam",
        age: "38 Years",
        nationility: "Dutch",
        experience: "15 years in Project Mang.",
        degree: " Bachelor in Engineering ",
        skills: "Hardware, Engineering Management, Scrum, Presentation, Team leading, Project Management"
    }


    
]

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req,res) =>{
    
    res.render("home");
});

app.get("/choose-cvs-first", (req,res) =>{
    res.render("choose-cvs",{
        data: apllicantsData
    })
});

app.post("/choose-cvs-first", (req,res) =>{
    res.render("choose-cvs",{
        data: apllicantsData
    })
});

app.listen(3000);