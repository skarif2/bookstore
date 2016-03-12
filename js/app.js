var app = app || {};

$(function(){
	var books = [
		{ title: 'Javascripts: The Good Parts', author: 'Douglas Crookford', releaseDate: '2001', keywords: 'Javascript'},
		{ title: 'The Little Book on CoffeeScript', author: 'Alex MacCaw', releaseDate: '2009', keywords: 'CoffeeScript'},
		{ title: 'Scala for the Impatient', author: 'Cay S. Horstmann', releaseDate: '2010', keywords: 'Scala'},
		{ title: 'American Psycho', author: 'Bret Easton Ellis', releaseDate: '1991', keywords: 'America'},
		{ title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', releaseDate: '2011', keywords: 'Javascript'}
	];
	new app.LibraryView( books );
});
