import React from 'react'

export default function TodoList() {

    let todos = [
        'FSAB Project',
        'Math 0180 Problems',
        'CLPS 0010 Writing Assignment',
        'CSCI Andybot'

    ]
    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard key={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}