

document.getElementById('entry').addEventListener("submit", enter);

  var books = ["genesis", "exodus", "leviticus", "numbers", "deuteronomy", "joshua", "judges", "ruth"];
  var countries = [];
  var states = [];
  var presidents = [];
  var current = 0;
  function isCorrect(input)
  {
    books[current].toLowerCase() === input.toLowerCase();
  }

  function enter(event) {
    var entry = document.getElementById('newEntry').value;

    if (books[current] === entry)
    {
      current++;
      document.getElementById('correct').innerHTML = "correct";
      document.getElementById("correct").style.color = "green";
      document.getElementById('entries').innerHTML += '<tr><td></td><td>' + entry + '</td></tr>';
    }
    else
    {
      document.getElementById('correct').innerHTML = "wrong";
      document.getElementById("correct").style.color = "red"
    }
    document.getElementById('newEntry').value = '';
    event.preventDefault();
  }
