
function Message({handleToGetPost}) {
    return (
        <center className="mesage">
            <h3 >There are no Posts</h3>
            <button className="btn btn-primary" onClick={handleToGetPost}>Get Post form server</button>
        </center>

    )
}

export default Message