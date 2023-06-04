const cars = [
  {
    id: 1,
    name: "BMW",
    price: 100000,
    start: 1916,
    end: 2021,
    description:
      "BMW AG is a German multinational corporation which produces luxury vehicles and motorcycles.",
  },
  {
    id: 2,
    name: "Toyota Camry",
    price: 24900,
    start: 1982,
    end: 2021,
    description:
      "The Toyota Camry is an automobile sold internationally by the Japanese manufacturer Toyota since 1982, spanning multiple generations.",
  },
  {
    id: 3,
    name: "Mercedes-Benz S-Class",
    price: 130000,
    start: 1954,
    end: 2021,
    description:
      "The Mercedes-Benz S-Class, formerly known as Sonderklasse, is a series of full-size luxury sedans and limousines produced by the German automaker Mercedes-Benz, a division of German company Daimler AG.",
  },
  {
    id: 4,
    name: "Tesla Model S",
    price: 75000,
    start: 2012,
    end: 2021,
    description:
      "The Tesla Model S is an all-electric five-door liftback sedan produced by Tesla, Inc., and introduced on June 22, 2012.",
  },
  {
    id: 5,
    name: "Ford Mustang",
    price: 27855,
    start: 1964,
    end: 2021,
    description:
      "The Ford Mustang is a series of American automobiles manufactured by Ford. In continuous production since 1964, the Mustang is currently the longest-produced Ford car nameplate.",
  },
  {
    id: 6,
    name: "Porsche 911",
    price: 99950,
    start: 1963,
    end: 2021,
    description:
      "The Porsche 911 is a two-door, 2+2 high performance rear-engined sports car made since 1963 by Porsche AG of Stuttgart, Germany.",
  },
  {
    id: 7,
    name: "Honda Civic",
    price: 21900,
    start: 1972,
    end: 2021,
    description: "The Honda Civic is a line of cars manufactured by Honda.",
  },
  {
    id: 8,
    name: "Chevrolet Corvette",
    price: 59995,
    start: 1953,
    end: 2021,
    description:
      "The Chevrolet Corvette is a two-seat sports car manufactured by Chevrolet. The car has been produced through seven generations.",
  },
  {
    id: 9,
    name: "Audi R8",
    price: 142700,
    start: 2006,
    end: 2021,
    description:
      "The Audi R8 is a mid-engine, 2-seater sports car produced by German automotive manufacturer Audi.",
  },
  {
    id: 10,
    name: "Lamborghini Aventador",
    price: 393695,
    start: 2011,
    end: 2021,
    description:
      "The Lamborghini Aventador is a mid-engine sports car produced by the Italian automotive manufacturer Lamborghini.",
  },
];

const data = cars.filter((car) => {
  if (car.price < 100000) {
    console.log(car.name);
  }
});

console.log(data);
// const container = document.querySelector("body");
// const p = document.createElement("p");

// const carInfo = cars
//   .map((car) => {
//     const age = new Date().getFullYear() - car.start;
//     return `
//       <div>
//         <h2>${car.name}</h2>
//         <p>Produced in ${car.start}, ${car.name} is now ${age} years old. It costs $${car.price} and ${car.description}</p>
//       </div>
//     `;
//   })
//   .join("");

// p.innerHTML = carInfo;
// container.appendChild(p);
