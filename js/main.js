var entryForm = document.getElementById('entryForm');
var listSelector = document.getElementById('listSelector');
var listTitle = document.getElementById('listTitle');
var itemsLeft = document.getElementById('itemsLeft');

var list;
entryForm.addEventListener("submit", enter);
listSelector.addEventListener('change', selectList);

function isCorrect(input) {
  list[current].toLowerCase() === input.toLowerCase();
}

function enter(event) {
    var entry = document.getElementById('newEntry');
    var entryFeedback = document.getElementById('entryFeedback');
    var entries = document.getElementById('entries');
    var current = 0;
    if (list[current] === entry.value) {
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

function selectList(event) { 
  var selectedList = listSelector.options[listSelector.selectedIndex].value;
  list = selectedList;
  console.log('selected', lists[selectedList]);
  console.log('selected', lists[selectedList].length);
  itemsLeft.innerHTML = lists[selectedList].length;
}
