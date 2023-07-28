const { AddBookHandler, getAllBooksHandler, getBookByIdHandler, editNoteHandler, deleteBookByHandler } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: AddBookHandler
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdHandler
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editNoteHandler
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookByHandler
    }
];

module.exports = routes;