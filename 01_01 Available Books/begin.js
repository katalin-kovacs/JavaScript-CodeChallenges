class Book {
  constructor(title, author, isbn, availableCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.availableCopies = availableCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.availableCopies === 0) {
      return "Out of stock";
    } else if (this.availableCopies < 10) {
      return "Low stock";
    } else if (this.availableCopies >= 10) {
      return "In stock";
    } else {
      return "Stock information not available";
    }
  }

  sell(numOfCopiesToSell = 1) {
    this.availableCopies -= numOfCopiesToSell;
  }

  restock(numOfCopiesToRestock = 5) {
    this.availableCopies += numOfCopiesToRestock;
  }
}

const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.availability);
HungerGames.restock(12);
console.log(HungerGames.availability);
HungerGames.sell(17);
console.log(HungerGames.availability);
