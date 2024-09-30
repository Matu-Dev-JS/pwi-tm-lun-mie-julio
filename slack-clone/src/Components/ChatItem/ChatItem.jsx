import React from 'react'

const ChatItem = ({author, text}) => {
    return (
        <div >
            <div >{author}</div>
            <p>{text}</p>
        </div>
    )
}
export default ChatItem