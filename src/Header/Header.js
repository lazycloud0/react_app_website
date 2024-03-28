import "react";
import "./Header.css";
import Link from "next/link";

// created header, logo and founders link to founders page
export default function Header() {
    return (
        <header className="header">🔥 Fireplace Palace <Link href="/founders" className="founder-link">Founders</Link></header>
    )
}