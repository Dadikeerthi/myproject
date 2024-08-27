const mainDiv=document.getElementById('main')
const inputElement=document.getElementById('inp')
const searchButton=document.getElementById('btn')
function fetchData()
{
  fetch(`https://www.omdbapi.com/?s=${inputElement.value}&apikey=6891baf1`)
  .then(function(res){console.log(res); return res.json() })
  .then(function(data){console.log(data)})
  .catch(function(err){console.log(err)})
}
searchButton.addEventListener('click', fetchData)
function displayData(movies)
{
 movies.forEach(function(m){
    const movieDiv=document.createElement('div');
    movieDiv.classList.add('movie')
    const movieImg=document.createElement('img');
    movieImg.src=m.Poster;
    movieImg.alt=m.Title;
    const movieTitle=document.createElement('h2');
    movieTitle.textContent=m.Title;
    movieDiv.append(movieImg, movieTitle )
    mainDiv.appendChild(movieDiv)
 })
}
