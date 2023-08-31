function position(letter) {
    letter = letter.toLowerCase();
  
    if (letter.length === 1 && /^[a-z]$/.test(letter)) {
      var position = letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
      return "Position of alphabet: " + position;
    } else {
      return "Invalid input. Please provide a single letter from the alphabet.";
    }
  }