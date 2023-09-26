// local reviews data
/* Array with objects */
const reviews = [
    {
        id: 1,
        name: "Emma Müller",
        job: "Software Engineer at ABC Inc.",
        img: "./images/1.jpg",
        text: "Emma is a passionate and skilled software engineer who has experience in developing web applications using Java, Spring Boot, and Angular. She is proficient in using various tools and frameworks such as Maven, Hibernate, JUnit, and Bootstrap. She is also familiar with agile methodologies and DevOps practices. Emma enjoys learning new technologies and solving complex problems."
    },
    {
        id: 2,
        name: "Noah Meier",
        job: "Data Analyst at XYZ Ltd.",
        img:"./images/2.jpg",
        text: "Noah is a data analyst who has a keen interest in data science and machine learning. He has a background in statistics and computer science, and he is proficient in using Python, R, SQL, and Excel for data analysis and visualization. He has experience in working with large datasets and applying various machine learning techniques such as regression, classification, clustering, and natural language processing. Noah is always eager to explore new data sources and find insights that can help businesses make better decisions.",
    },
    {
        id: 3,
        name: "Mia Schmid",
        job: "Web Developer at LMN Pvt.",
        img: "./images/3.jpg",
        text: "Noah is a data analyst who has a keen interest in data science and machine learning. He has a background in statistics and computer science, and he is proficient in using Python, R, SQL, and Excel for data analysis and visualization. He has experience in working with large datasets and applying various machine learning techniques such as regression, classification, clustering, and natural language processing. Noah is always eager to explore new data sources and find insights that can help businesses make better decisions.",
    },
    {
        id: 4,
        name: "Liam Keller",
        job: "IT Consultant at PQR Co.",
        img: "./images/4.jpg",
        text: "Liam is an IT consultant who has a broad range of skills and expertise in the IT field. He has a degree in computer engineering and a certification in project management. He has experience in working on various IT projects such as software development, system integration, network administration, and cybersecurity. He is proficient in using various languages and platforms such as C#, .NET, SQL Server, Oracle, Linux, and Windows. Liam is a team player who can communicate effectively with clients and stakeholders.",
    },
    {
        id: 5,
        name: "Sofia Huber",
        job: "Software Tester at GHI Ltd.",
        img: "./images/5.jpg",
        text: "Sofia is a software tester who has a keen eye for detail and quality. She has experience in performing various types of testing such as functional testing, usability testing, performance testing, and security testing. She is proficient in using various tools and frameworks such as Selenium, TestNG, JMeter, and Postman. She is also familiar with software development life cycle and testing methodologies such as waterfall, agile, and scrum. Sofia is always looking for ways to improve the quality and reliability of software products.",
    }
]; 

// Grab elements from html
const persongImg = document.getElementById("person-img")
const personName = document.getElementById("name");
const job = document.getElementById("job")
const info = document.getElementById("info");

// Grab buttons from html
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const surpriseBtn = document.getElementById("surprise-btn");

// starting item setting 
let startItem = 0;

//To manipulate DOM with the funtion
window.addEventListener('DOMContentLoaded',function(){
    showPerson(startItem)   
})
// main function
function showPerson (person){
    let item = reviews[startItem]
    persongImg.src = item.img
    personName.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}
// make next button work
nextBtn.addEventListener("click", function(){
    startItem++
        if (startItem > reviews.length - 1){
        startItem = 0;
    }
    showPerson(startItem)
})
// make prev button work
prevBtn.addEventListener("click", function(){
    startItem--
        if (startItem < 0){
        startItem = reviews.length - 1
    }
    showPerson(startItem)
})

