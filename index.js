//STEP 1: 
const formData = document.querySelector("form")
const message = document.querySelector('#message')

//STEP 2:
function addMovie (event) {
    event.preventDefault()
    let inputField = document.querySelector('input') 
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.addEventListener('click', crossOffMovie)
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    
    
    const list = document.querySelector('ul')
    list.appendChild(movie)  

    inputField.value = ""
    message.textContent = 'Movie added'
}

function deleteMovie (event) {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted'
}

function crossOffMovie (event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains ('checked')){
        message.textContent = 'Watched'
    }
    else{
     message.textContent = 'Re-added movie'
    }
    
}

//STEP 3:
formData.addEventListener('submit', addMovie)

