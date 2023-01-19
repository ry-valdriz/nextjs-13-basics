'use client'
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {

    useEffect(() => {
        console.log(error)
    }, [error]);

    return (
        <div>
            <p>An error has occurred. . .</p>
            <button onClick={() => reset()}>Reset error boundary</button>
        </div>
    )
}