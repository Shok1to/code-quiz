var scoreList = document.getElementById('scores-list');
var clearScores = document.getElementById('clear-score');
var gameRestart = document.getElementById('restart')



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

clearScores.addEventListener('click',resetScores)


function restart(){
    window.location.reload();
}

gameRestart.addEventListener("click",restart)

