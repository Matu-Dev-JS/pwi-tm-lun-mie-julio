import React from 'react'

const ChatHistory = () => {
    const chatHistory = data.map((dia) => {
        return (
            <div>
                Dia tanto
                {
                    dia.conversartions.map((conversation) => {
                        return (
                            <div>Titulo de la conversacion</div>
                        )
                    })
                }
            </div>
        )
    })
  return (
    <div>{chatHistory}</div>
  )
}

export default ChatHistory