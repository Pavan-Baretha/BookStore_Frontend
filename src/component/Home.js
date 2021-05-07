import React, { Component, useState, useEffect } from 'react';
import axios from "axios"

var book = []

class Home extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     books: []
            
        // }
        this.state = {};
    }
    //  fetchdata(){
    //     axios({
    //         method: "get",
    //         url: "http://localhost:9002/book/getBook"
    //     }).then((response) => {
    //         console.log("hiiiii" + JSON.stringify(response.data))

    //         this.setState = {
    //            books: response.data
    //         }
    //         console.log("after response")
    //     }, (error) => {
    //         console.log(error);
    //     })
    // }
    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:9002/book/getBook"
        }).then((response) => {
            console.log("hiiiii" + JSON.stringify(response.data))

            this.setState = {
               books: response.data
            }
            console.log("after response" + this.books)
        }, (error) => {
            console.log(error);
        })
        // fetch("http://localhost:9002/book/getBook")
        // .then((response) => response.json())
        // .then(booksList => {
        //     this.setState({ books: booksList });
        // });
        // console.log(this.books);
    }
    render() {
        return (
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
                                
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;