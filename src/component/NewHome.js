import React, { Component } from 'react';

class NewHome extends Component {
    componentDidMount() {
        const apiUrl = '"http://localhost:9002/book/getBook"';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {console.log('This is your data', data)});
      }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default NewHome;