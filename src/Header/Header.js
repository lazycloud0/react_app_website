import "react";
import "./Header.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className="header">🔥 Fireplace Palace<Link href="/founders" className="link">Founders</Link></header>
    )
}