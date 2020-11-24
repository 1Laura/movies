let movies = [
    {
        id: '1',
        image: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "Parasite",
        year: "2019",
        rating: "8.6",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        comments: []
    },
    {
        id: '2',
        image: "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "The Queen's Gambit ",
        year: "2020",
        rating: "8.8",
        description: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
        comments: [{
            name: "John",
            comment: "So boring, i fall asleep to it and hibernated through whole winter"
        }]
    },
    {
        id: '3',
        image: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "Joker ",
        year: "2019",
        rating: "8.5",
        description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
        comments: [
            {
                name: "Marry",
                comment: "Put on a happy face :)"
            },
            {
                name: "Batman",
                comment: "My parents was not impressed with this"
            },
        ]
    },
    {
        id: '4',
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
        title: "The Godfather",
        year: "1972",
        rating: "9.2",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        comments: []
    },
    {
        id: '5',
        image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
        title: "Pulp Fiction",
        year: "1994",
        rating: "8.9",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        comments: []
    },
    {
        id: '6',
        image: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "The Shining",
        year: "1980",
        rating: "8.4",
        description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
        comments: [{
            name: "Jane",
            comment: "Soundtrack is epic"
        }]
    },
]

const helpers = {
    showSingleMovie() {
        gallery.style.display = 'none'
        aboutMovie.style.display = 'block'

    },
    showGalleryMovies() {
        gallery.style.display = 'flex'
        aboutMovie.style.display = 'none'
    }
}

const gallery = document.getElementById('gallery')
const aboutMovie = document.getElementById('aboutMovie')
const btnBack = document.getElementById('btnBack')
const singleMovie = document.getElementById('singleMovie')
const commentsBlock = document.querySelector('.commentsBlock')

btnBack.addEventListener('click', helpers.showGalleryMovies)

let image
let title
let year
let rating
let description
let myComm
let currentMovie
let btnSubmit
let arrComm = []

function displayMoviesCard() {

    movies.map(m => {
        card = document.createElement('div')
        card.classList.add('card')
        card.setAttribute('id', m.id)
        //atidaro single movie
        card.addEventListener('click', openAboutMovie)

        image = document.createElement('img')
        image.src = m.image

        title = document.createElement('h2')
        title.innerText = m.title

        year = document.createElement('h3')
        year.innerText = m.year

        rating = document.createElement('h4')
        rating.innerText = m.rating

        let createCard = [image, title, year, rating]
        createCard.map(item => {
            card.appendChild(item)
        })
        gallery.appendChild(card)
    })
}

displayMoviesCard()


function openAboutMovie(event) {
    singleMovie.innerHTML = ''

    let id
    !!event.target.id ? id = event.target.id : id = event.path[1].id
    let filter = movies.filter(item => item.id === id)[0]
    //destrukturizavimas. Prideda prie objekto parametrus, sujungia objektus.pvz
    // let obj ={
    //     name:'as',
    //     age: '99'
    // }
    // currentMovie = {...filter, ...obj}
    currentMovie = {...filter}

    helpers.showSingleMovie()

    image = document.createElement('img')
    image.src = currentMovie.image

    title = document.createElement('h2')
    title.innerText = currentMovie.title

    year = document.createElement('h3')
    year.innerText = currentMovie.year

    rating = document.createElement('h4')
    rating.innerText = currentMovie.rating

    description = document.createElement('p')
    description.innerText = currentMovie.description

    // comments = document.createElement('div')
    // comments.innerText = currentMovie.comments[0]

    myComment = document.createElement('input')
    btnSubmit = document.createElement('button')
    btnSubmit.innerText = "Submit"

    // myComment.addEventListener('input', displayMyComment)
    btnSubmit.addEventListener('click', submitMyComment)

    let createMovie = [image, title, year, rating, description, myComment, btnSubmit]
    createMovie.map(e => {
            singleMovie.appendChild(e)
        }
    )
    // let currentMovie = movies.findIndex(el => el.id === id)
}

function displayMyComment(event) {
    movies[currentMovie].comments.map(item => {
        let name = document.createElement('h4')
        name.innerText = item.name

        let comment = document.createElement('div')
        comment.classList.add('comment')

        comment.innerText = item.comment
        commentsBlock.appendChild(name)
        commentsBlock.appendChild(comment)
    })
}

function submitMyComment(s) {
    myComm = s.path[1].childNodes[6].value

    console.log(myComm)
    let mComm = {
        name: "Laura",
        comment: myComm
    }
    movies[currentMovie].comments.push(mComm)
    console.log(movies[currentMovie].comments)
    displayMyComment()

}