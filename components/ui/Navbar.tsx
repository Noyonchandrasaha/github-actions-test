"use client"

import {useState, useEffect} from "react";
import Link from "next/navigation";
import {ShoppingCart, User, Search, MessageSquare, Menu, X, LogOut} from "lucide-react"
import {cn} from "@/lib/utils"
import {useAuth} from "@/context/AuthContext"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const {user, logout} = useAuth();
    
    useEffect (() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <nav>Hello nav</nav>
    )
}