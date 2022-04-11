let answer = null

function getWords(){
    const fs = require('fs');

    let rawdata = fs.readFileSync('words.json');
    let words_pre = JSON.parse(rawdata);
    

    let words = []
    for (let i = 0; i < 5; i++) {
        words.push(words_pre.amogus[Math.floor(Math.random() *  words_pre.amogus.length)])
    }
    return words
}

function setAnswer(data){
    answer = data
}

function checkGuess(data){
    if (data === answer){
        return true
    } else {
        return false
    }
}

module.exports = {
    getWords,
    setAnswer,
    checkGuess
}