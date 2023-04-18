var scoreList = document.getElementById('scores-list');
var resetScores = document.getElementById('clear-score');




function populateScores() {
    var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    for (let i = 0; i < highScores.length; i++) {
        // Create a li element
        var liEl = document.createElement('li')
        // Give text Content to the element
        liEl.textContent = "Initials: " + highScores[i].initials + ", Score: " + highScores[i].score
        // Append element to scoreList
        scoreList.append(liEl)
    }
    
}

populateScores();

function resetScores(){
    localStorage.clear("highScores")
    

}