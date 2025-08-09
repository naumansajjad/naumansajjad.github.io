import React from 'react'

export default function Todoist() {
    return (
        <iframe src="https://app.todoist.com/app/project/demo-project-6cVvRH8XCxcjqvm8" frameBorder="0" title="Todoist" className="h-full w-full"></iframe>
        // just to bypass the headers 🙃
    )
}

export const displayTodoist = () => {
    <Todoist> </Todoist>
}
