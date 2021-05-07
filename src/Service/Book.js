import axios from 'axios';

const BOOK_URL = "http://localhost:9002/book/getBook";

const Book_URL_POST = "http://localhost:9002/book/addBook"
class Book{
    getBooks(){
        return axios.get(BOOK_URL);
    }
    addBooks(book){
        return axios.post(Book_URL_POST,book);
    }
}

export default new Book()