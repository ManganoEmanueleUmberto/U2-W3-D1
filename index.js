// ESERCIZIO 1

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(anotherUser) {
    if (this.age > anotherUser.age) {
      return `${this.firstName} è più vecchio di ${anotherUser.firstName}`;
    } else if (this.age < anotherUser.age) {
      return `${this.firstName} è più giovane di ${anotherUser.firstName}`;
    } else {
      return `${this.firstName} ha la stessa età di ${anotherUser.firstName}`;
    }
  }
}

const user1 = new User("Emanuele", "Mangano", 25, "Catania");
const user2 = new User("Chiara", "Russo", 27, "Napoli");

console.log(user1.compareAge(user2));

//ESERCIZIO 2

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}

const petForm = document.getElementById("petForm");
const petList = document.getElementById("petList");

petForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;
  const newPet = new Pet(petName, ownerName, species, breed);
  const listItem = document.createElement("li");
  listItem.textContent = `Nome: ${newPet.petName}, Proprietario: ${newPet.ownerName}, Specie: ${newPet.species}, Razza: ${newPet.breed}`;
  petList.appendChild(listItem);

  petForm.reset();
});
