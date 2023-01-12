

function ReactBook(props){

    console.log('hi')
    return(
        <>
        <dl>
            <dt>제목</dt>
            <dd>{props.title}</dd>
            <dt>가격</dt>
            <dd>{props.price}</dd>
            <dt>클래스룸</dt>
            <dd>{props.room}</dd>

        </dl>
        </>
    )
}



// function ReactBook({title,price,room}){

//     console.log('hi')
//     return(
//         <>
//         <dl>
//             <dt>제목</dt>
//             <dd>{title}</dd>
//             <dt>가격</dt>
//             <dd>{price}</dd>
//             <dt>클래스룸</dt>
//             <dd>{room}</dd>

//         </dl>
//         </>
//     )
// }



export default ReactBook;