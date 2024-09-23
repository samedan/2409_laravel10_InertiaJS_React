import { Link } from "@inertiajs/react";
import React from "react";

export default function Home({ name }) {
    return (
        <>
            <div className="title">Home for {name}</div>
            <Link preserveScroll href="/" className="block title mt-[1200px]">
                {new Date().toLocaleTimeString()}
            </Link>
        </>
    );
}
