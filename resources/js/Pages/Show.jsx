import { useForm } from "@inertiajs/react";

export default function Show({ post }) {
    // console.log(useForm());

    // alias to avoid 'delete' use name
    const { delete: destroy } = useForm();

    function submit(e) {
        e.preventDefault();
        destroy(`/posts/${post.id}`);
    }

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
                <div className="flex items-center justify-end gap-2">
                    <form onSubmit={submit}>
                        <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white">
                            Delete
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
