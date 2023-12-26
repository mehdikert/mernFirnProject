import React, { useEffect, useState } from 'react'

function Home() {
    const [workout, setWorkout] = useState(null)
    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch('/api/workout')
            const json = await response.json()
            if (response.ok) {
                setWorkout(json)
            }
        }

        fetchWorkout()
    }, [])
    return (
        <div className='home'>
            <div className="workout">
                {
                    workout && workout.map(
                        (workout) => { <p key={workout._id}>{workout.title}</p> }
                    )
                }
            </div>
        </div>
    )
}

export default Home