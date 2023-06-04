const courses = [
  {
    id: 1,
    name: "Javascript",
    price: 100,
    description:
      "JavaScript is a programming language that can be used to program games, make web pages, and write server-side programs using NodeJS.",
  },
  {
    id: 2,
    name: "React",
    price: 150,
    description:
      "React is a JavaScript library for building user interfaces, widely used in modern web development.",
  },
  {
    id: 3,
    name: "Python",
    price: 120,
    description:
      "Python is an interpreted programming language, widely used in web development, data science, artificial intelligence, and many other fields.",
  },
  {
    id: 4,
    name: "Java",
    price: 130,
    description:
      "Java is an object-oriented programming language, widely used in web development, mobile applications, and desktop software.",
  },
  {
    id: 5,
    name: "C++",
    price: 140,
    description:
      "C++ is an object-oriented programming language, widely used in computer software development, gaming, and other applications.",
  },
  {
    id: 6,
    name: "Machine Learning",
    price: 200,
    description:
      "Machine Learning is a field of artificial intelligence, studying algorithms and models to help computers learn and improve performance automatically.",
  },
  {
    id: 7,
    name: "Data Science",
    price: 180,
    description:
      "Data Science is a field related to collecting, processing, and analyzing data to derive useful insights and support decision-making.",
  },
  {
    id: 8,
    name: "Blockchain",
    price: 250,
    description:
      "Blockchain is a new technology that can be used to build decentralized, secure, and reliable applications.",
  },
  {
    id: 9,
    name: "Angular",
    price: 160,
    description:
      "Angular is a JavaScript framework for building single-page web applications, widely used in modern web development.",
  },
  {
    id: 10,
    name: "Swift",
    price: 170,
    description:
      "Swift is a programming language used for application development, widely used in modern web development.",
  },
];

const data = courses.forEach((item) => {
  console.log(item.name);
});
console.log(data);
