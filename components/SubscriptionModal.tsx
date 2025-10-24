"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
interface SubscriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SubscriptionModal({ isOpen, onClose }: SubscriptionModalProps) {
    const [email, setEmail] = useState("");
    const [show, setShow] = useState(false);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("https://api.aiprojectreport.com/subscribe/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Something went wrong");
            setEmail("");
            onClose()
            toast.success("Subscribed successfully!", {
                duration: 4000, // 10 seconds
                style: {
                    minWidth: "300px",      // increase width
                    maxWidth: "500px",
                    padding: "16px 24px",
                    fontSize: "18px",       // larger font
                    background: "#8da2e9ff",  // custom background
                    color: "#fff",           // custom text color
                },
            });
        } catch (err: any) {
            console.log(err.message || "Failed to subscribe");
        }
    };

    // Animate modal appearance
    useEffect(() => {
        if (isOpen) setShow(true);
        else setShow(false);
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thank you! We will notify ${email} about the launch.`);
        setEmail("");
        onClose();
    };

    if (!isOpen && !show) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
                }`}
        >
            <div
                className={`bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 w-full max-w-md transform transition-transform duration-300 ${isOpen ? "translate-y-0" : "-translate-y-10"
                    }`}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute cursor-pointer top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white transition"
                >
                    ✕
                </button>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                    Subscribe for Launch Offers
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                    Enter your email to get early access and special discounts on our premium plans before launch.
                </p>

                <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 cursor-pointer transition font-semibold"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
}
