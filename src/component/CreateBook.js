import react from 'react'
import Book from '../Service/Book';
function CreateBook() {
    var  book = {}
    function addBook(){
              book.bookName = document.getElementById('bookName').value;
              book.authorName = document.getElementById('authorName').value;
              book.price = document.getElementById('price').value;
              console.log(book);
              Book.addBooks(book);
    }
    return (
        <div className="container p-3" style={{ margin: "auto", width: "40%", borderRadius: '10px', backgroundColor: "rgba(60,80,220,0.1)", boxShadow: "1px 1px 10px gray" }}>
            <div className="row justify-content-center">
                <div className="col-sm-7">

                           
                <form id="loginform"  >
                    <h3>Add Book</h3><br></br>
                     
                    <div class="form-group">
                        <input name="" type="email" class="form-control" id="bookName" placeholder="Enter Book Name" /><br></br>
                    </div>
                    
                    <div class="form-group">
                        <input name="" type="email" class="form-control" id="authorName" placeholder="Enter Author Name" /><br></br>
                    </div>
                    
                    <div class="form-group">
                        <input name="" type="email" class="form-control" id="price" placeholder="Enter Price" /><br></br>
                    </div>
                     
                    <div class="form-group " style={{ textAlign: "left" }}>
                                <button onClick={addBook} type="submit" class="btn btn-primary">Add Book</button>
                            </div><br></br>

                </form>
                </div>
            </div>
        </div>
    )
}
export default CreateBook