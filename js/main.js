var entryForm = document.getElementById('entryForm');
var listSelector = document.getElementById('listSelector');
var listTitle = document.getElementById('listTitle');
var itemsLeft = document.getElementById('itemsLeft');
//very hacky come on!
var list = ["genesis", "exodus", "leviticus", "numbers", "deuteronomy", "joshua", "judges", "ruth"];
entryForm.addEventListener("submit", enter);
listSelector.addEventListener('change', selectList);

function isCorrect(input) {
  list[current].toLowerCase() === input.toLowerCase();
}
var current = 0;
var itemsLeftValue = list.length;
function enter(event) {
    var entry = document.getElementById('newEntry');
    var entryFeedback = document.getElementById('entryFeedback');
    var entries = document.getElementById('entries');
    if (itemsLeftValue === 0){
      console.log('you win');
      //displayResetButton();
    }
    if (list[current] === entry.value) {
      current++;
      itemsLeftValue--;
      setEntryFeedback('correct', 'green');
      entries.innerHTML += '<tr><td></td><td>' + entry.value + '</td></tr>';
      itemsLeft.innerHTML = itemsLeftValue;
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
  itemsLeftValue = lists[selectedList].length;
  itemsLeft.innerHTML = itemsLeftValue;
  listTitle.innerHTML = selectedList;
}
