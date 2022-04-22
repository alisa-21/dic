import React from 'react';
import './dictionary.css';

const wrapper = document.querySelector(".wrapper"),
    searchInput = document.querySelector("input"),
    //volume = document.querySelector(".word i"),
    terWord = document.getElementById('ter'),
    defWord = document.getElementById('def'),
    addButton = document.getElementById('add-word-btn'),
    table = document.getElementById('table');

let words;

localStorage.length < 1 ? words = [] : words = JSON.parse(localStorage.getItem('words'));

function data(result, word){
    if(result.title){
        infoText.innerHTML = `Слово <span>"${word}"</span>не найдено.`;
    }
    else
    {
        wrapper.classList.add("active");
        let definitions = result[0].meanings[0].definitions[0];
        //document.querySelector(".word p").innerText = result[0].word;
        document.querySelector(".meaning").innerText = definitions.definition;
    }
}

/*function search(word){
    fetchApi(word);
    searchInput.value = word;
}*/

function fetchApi(word){
    wrapper.classList.remove("active");
    searchInput.value = word;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url).then(response => response.json()).then(result => data(result, word)).catch();
}

searchInput.addEventListener("keyup", e =>{
    let word = e.target.value.replace(/\s+/g, ' ');
    if(e.key == "Enter" && word){
        fetchApi(word);
    }
});

const addWordToTable = index =>{    
    table.innerHTML += `
        <tr class="tr">
            <td class="ter">${words[index].term}</td>
            <td class="def">${words[index].definition}</td>
        </tr>
    `
    addWordToTable(i);
}

/*words.forEach((element,i) => {
    addWordToTable(i);
});*/

addButton.addEventListener('click', () => {
    if(
  
        words.push(new CreateWord(terWord.value,defWord.value)));
        localStorage.setItem('words', JSON.stringify(words));
        addWordToTable(words.length - 1);
        terWord.value = null;
        defWord.value = null;
    
})

function CreateWord(term, definition){
    this.term=term;
    this.definition=definition;
}

export default CreateWord;

