const books = [
    {title: 'El Quijote', avg_rating: 4.5},
    {title: 'Don Juan', avg_rating: 3.8},
    {title: 'Cien años de soledad', avg_rating: 4.7},
    {title: 'Matar a un ruiseñor', avg_rating: 5},
    {title: 'El Gran Gatsby', avg_rating: 3.6},
]

var filtro = books
.filter(function(libro) {
    return books.avg_rating > 4
}).map(function(libro) {
    return {title: libro.title, rating: libro.avg_rating}
});
console.log('Filtrados',filtro);
