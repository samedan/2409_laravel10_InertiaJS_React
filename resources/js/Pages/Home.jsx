import { Link } from "@inertiajs/react";
import React from "react";

export default function Home({ posts }) {
    return (
        <>
            <div className="title">Home</div>
            <div>
                {posts.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <small>
                                Posted on :{" "}
                                <span>
                                    {new Date(
                                        post.created_at
                                    ).toLocaleTimeString()}
                                </span>
                            </small>
                        </div>
                        <p className="font-medium">{post.body}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
