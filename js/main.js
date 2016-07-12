var entryForm = document.getElementById('entryForm');
var listSelector = document.getElementById("listSelector");
var listTitle = document.getElementById("listTitle");
var itemsLeft = document.getElementById('itemsLeft');

entryForm.addEventListener("submit", enter);

function isCorrect(input) {
  lists.books[current].toLowerCase() === input.toLowerCase();
}

function enter(event) {
    var entry = document.getElementById('newEntry');
    var entryFeedback = document.getElementById('entryFeedback');
    var entries = document.getElementById('entries');
    var current = 0;
    if (lists.books[current] === entry.value) {
      current++;
      setEntryFeedback('correct', 'green');
      entries.innerHTML += '<tr><td></td><td>' + entry.value + '</td></tr>';
    } else {
      setEntryFeedback('wrong', 'red');
    }

    entry.value = '';
    event.preventDefault();
}

function setEntryFeedback(text, color){
  entryFeedback.innerHTML = text;
  entryFeedback.style.color = color;
}
