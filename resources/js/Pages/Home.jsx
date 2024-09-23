import { Link } from "@inertiajs/react";
import React from "react";

export default function Home({ posts }) {
    console.log(posts);

    return (
        <>
            <div className="title">Home</div>
            <div>
                {posts.data.map((post) => (
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
            <div className="px-4 py-12">
                {posts.links.map((link) =>
                    link.url ? (
                        <Link
                            href={link.url}
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 ${
                                link.active ? "text-blue-500 font-bold" : ""
                            }`}
                        />
                    ) : (
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 text-slate-300`}
                        ></span>
                    )
                )}
            </div>
        </>
    );
}
