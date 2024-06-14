import { useEffect } from 'react'
export default function About() {
    useEffect(() => {
        fetch('/api/user').then((result) => {
            console.log('result',result)
        })
    },[])
    return (
        <div>
            about1
        </div>
    )
}
