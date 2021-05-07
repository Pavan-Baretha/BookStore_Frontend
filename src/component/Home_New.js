import React, {useState,useEffect} from 'react'
import axios from 'axios'
import nextId from "react-id-generator";


function Home_New(){
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:9002/book/getBook')
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        }).catch(err =>{
            console.log(err)
        } )
    })
    return(
        <div>
        <h1><b>Wel Come To Covid-19 BookStore</b></h1>
        <div>
            <h2 className="text-center"> Employee List</h2>
            <div className="row">
                <button className="btn btn-primary" >Add Employee</button>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Book Name</th>
                            <th>Author Name</th>
                            <th>Book Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                                         posts.map(
                                             post => 
                                             <tr>
                                                 <td>{}</td>
                                                 <td>{post.bookName}</td>
                                                 <td>{post.authorName}</td>
                                                 <td>{post.price}</td>
                                             </tr>
                                         )
                                     }
                    </tbody>
                </table>
            </div>

        </div>
    </div>
    )
}



export default Home_New