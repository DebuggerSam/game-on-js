let words = ["программа",
        "макака",
        "прекрасный",
        "оладушек"
      ];

      let word = words[Math.floor(Math.random() * words.length)];

      let ansersArray = [];

      for (let i = 0; i < word.length; i++) {
        ansersArray[i] = '_';
      }

      let reminingsLetters = word.length;

      while (reminingsLetters > 0) {
        alert(ansersArray.join(' '));
        let guess = prompt('Пожалуйста введите букву: ')
        if (guess == null) {
          break
        } else if (guess.length !== 1) {
          alert('Пожалуйста введите только одну букву!')
        } else {
          for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
              ansersArray[j] = guess;
              reminingsLetters--;
            }
          }
        }
      }
      alert(ansersArray.join(' '));
      alert('Отлично! Было загадано слово ' + word);