function Hn(){
    return(
        <h2>
            <span>Main</span>
            <b>title</b>
        </h2>
    );
}
function Content(){
    return(
        <>
        <p>콘텐츠내용</p>
        <ul>
            <li>list01</li>
            <li>list02</li>
            <li>list03</li>
        </ul>
        </>
    )
}

function Main(){
    return(
        <>
        <Hn />
        <Content />
        </>
    )
}



export default Main;