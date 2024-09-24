export default function Show({ post }) {
    return (
        <>
            <div className="py-4 text-sm text-slate-600">
                <small>
                    Posted on :{" "}
                    <span>
                        {new Date(post.created_at).toLocaleTimeString()}
                    </span>
                </small>
                <p className="font-medium">{post.body}</p>
            </div>
        </>
    );
}
