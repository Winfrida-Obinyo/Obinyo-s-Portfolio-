'use client'

import { useState, useEffect } from 'react'

export default function ContactSlider() {
    const [visitors, setVisitors] = useState(0)
    const [visitorTimer, setVisitorTimer] = useState(0)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const images = [
        '/images/image6.jpg',
        '/images/image7.jpg',
        '/images/image8.jpg',
        '/images/image9.jpg',
        '/images/image10.jpg',
    ]

    useEffect(() => {
        setVisitors(Math.floor(Math.random() * 10))
        const interval = setInterval(() => {
            setVisitorTimer(prev => prev + 1)
        }, 10000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (visitorTimer % 5 === 0) {
            setVisitors(prev => prev + Math.floor(Math.random() * 5))
        }
    }, [visitorTimer])

    useEffect(() => {
        const imageChangeInterval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
        }, 5000) 

        return () => clearInterval(imageChangeInterval)
    }, [images.length])

    return (
        <div
            className="relative p-8 bg-cover bg-center rounded-lg shadow-lg h-96 md:h-[500px]"  
            style={{
                backgroundImage: `url(${images[currentImageIndex]})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h2>
                <p className="mb-4 text-white">Feel free to reach out if you have any questions or just want to chat!</p>
                <p className="mb-2 text-white"><strong>Email:</strong> obinyowinfridaa@gmail.com</p>
                <p className="mb-2 text-white"><strong>Location:</strong> Nairobi, Kenya</p>
                <p className="text-white"><strong>Current Visitors:</strong> {visitors}</p>
            </div>
        </div>
    )
}
