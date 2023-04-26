"use strict";

const API_KEY = '6027c8b9';
const BASE = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const searchType = document.querySelector('.search-type');
const searchResults = document.querySelector('.search-results');

searchForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const userSearch = searchInput.value.trim();
	const searchCategory = searchType.value;
	if (userSearch === '') {
		alert('Please write name of a movie');
		return;
	}
	searchResults.innerHTML = '';
	searchMovies(userSearch, searchCategory);
});

function searchMovies(userSearch, searchCategory) {
	const url = `${BASE}&s=${userSearch}&type=${searchCategory}`;
	fetch(url)
		.then(response => response.json())
		.then(data => {
			if (data.Response === 'False') {
				alert('Movie not found!');
			} else {
				showMovies(data.Search);
			}
		})
		.catch(error => {
			console.error('Error:', error);
		});
}

function showMovies(movies) {
	movies.forEach(movie => {
		const movieElement = document.createElement('div');
		movieElement.classList.add('movie');
		movieElement.innerHTML = `
			<img src="${movie.Poster}" alt="${movie.Title}">
			<div class="movie-info">
				<h3>${movie.Title}</h3>
				<p>${movie.Year}</p>
			</div>
		`;
		searchResults.appendChild(movieElement);
	})}