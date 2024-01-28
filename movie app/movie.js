class Movie {
    constructor(title, genre, releaseYear, isAvailable = true) {
      this.title = title;
      this.genre = genre;
      this.releaseYear = releaseYear;
      this.isAvailable = isAvailable;
    }
  
    rentMovie() {
      if (this.isAvailable) {
        this.isAvailable = false;
        console.log(`You have successfully rented ${this.title}. Enjoy the movie!`);
      } else {
        console.log(`${this.title} is not available for rent.`);
      }
    }
  
    returnMovie() {
      if (!this.isAvailable) {
        this.isAvailable = true;
        console.log(`Thank you for returning ${this.title}. Hope you enjoyed the movie!`);
      } else {
        console.log(`${this.title} is already available. No need to return.`);
      }
    }
  }
  
  class MovieRentalApp {
    constructor() {
      this.movies = [];
    }
  
    addMovie(title, genre, releaseYear) {
      const newMovie = new Movie(title, genre, releaseYear);
      this.movies.push(newMovie);
      console.log(`${title} has been added to the movie rental app.`);
    }
  
    displayMovies() {
      console.log("Available Movies:");
      this.movies.forEach((movie) => {
        console.log(`${movie.title} - ${movie.genre} - ${movie.releaseYear}`);
      });
    }
  
    rentMovie(title) {
      const movie = this.movies.find((m) => m.title === title);
      if (movie) {
        movie.rentMovie();
      } else {
        console.log(`Movie with title ${title} not found.`);
      }
    }
  
    returnMovie(title) {
      const movie = this.movies.find((m) => m.title === title);
      if (movie) {
        movie.returnMovie();
      } else {
        console.log(`Movie with title ${title} not found.`);
      }
    }
  }
  
  // Example usage
  const rentalApp = new MovieRentalApp();
  
  rentalApp.addMovie("Inception", "Sci-Fi", 2010);
  rentalApp.addMovie("The Shawshank Redemption", "Drama", 1994);
  
  rentalApp.displayMovies();
  
  rentalApp.rentMovie("Inception");
  rentalApp.rentMovie("The Shawshank Redemption");
  
  rentalApp.displayMovies();
  
  rentalApp.returnMovie("Inception");
  rentalApp.returnMovie("The Shawshank Redemption");
  
  rentalApp.displayMovies();
  