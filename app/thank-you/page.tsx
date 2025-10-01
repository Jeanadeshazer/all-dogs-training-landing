"use client"

import { useEffect, useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ClockLoader } from "react-spinners"

export default function ThankYouPage() {

    const [timeLeft, setTimeLeft] = useState(5)
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        if (timeLeft === 1) window.location.href="/";

        const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer); // cleanup
    }, [timeLeft]);


    return (
        <main className="min-h-screen">
            <Navigation />
            <div className="min-h-screen flex flex-col items-center justify-center bg-accent-foreground">
                <CheckCircle className="w-50 h-50 text-accent p-6" />
                <h1 className="text-4xl font-extrabold text-accent">Thank You for reaching out!</h1>
                <h2 className="text-2xl font-semibold text-accent mt-4">We'll get back to you soon...</h2>
                <p className="text-lg text-accent mt-2 pb-4">Directing you back home in ... {timeLeft}</p>
                <ClockLoader
                    color={"#0086d4"}
                    loading={loading}
                    size={80}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
            <Footer />
        </main>
    )
}