var entryForm = document.getElementById('entryForm');
var listSelector = document.getElementById("listSelector");
var listTitle = document.getElementById("listTitle");
var itemsLeft = document.getElementById('itemsLeft');

entryForm.addEventListener("submit", enter);

  function isCorrect(input)
  {
    books[current].toLowerCase() === input.toLowerCase();
  }

  function enter(event) {
    var entry = document.getElementById('newEntry');
    var entryFeedback = document.getElementById('entryFeedback');
    var entries = document.getElementById('entries');

    if (books[current] === entry.value)
    {
      current++;
      entryFeedback.innerHTML = 'correct';
      entryFeedback.style.color = "green";
      entries.innerHTML += '<tr><td></td><td>' + entry.value + '</td></tr>';
    }
    else
    {
      entryFeedback.innerHTML = "wrong";
      entryFeedback.style.color = "red"
    }
    entry.value = '';
    event.preventDefault();
  }
