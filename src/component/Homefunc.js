// import axios from 'axios'
// function Homefunc(){
//     var [allbooks, setbooks] = useState(books)
//     if (!allbooks.length > 0) {
//         axios({
//             method: 'get',
//             url: "http://localhost:9002/book/getBook"
//         }).then((response) => {
//             books = response.data.data

//             setbooks(response.data.data)

//             console.log(books)
//             //   datafetched = true
//         }, ((error) => {
//             console.log(error)
//         }))
//     }
//     return (
//         <div className="row">

//             {allbooks && allbooks.length > 0 && allbooks.map((each) => {
//                     return <h1>{each.price}</h1>
                
//             })}
//         </div>
//     )
// }
// export default Homefunc
