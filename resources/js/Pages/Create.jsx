import { Head, useForm } from "@inertiajs/react";

export default function Create() {
    // console.log(useForm());

    const { data, setData, post, errors, processing } = useForm({
        body: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/posts");
    }

    console.log(errors);

    return (
        <>
            <Head>
                <title>Create post</title>
                <meta
                    head-key="description"
                    name="description"
                    content="Create description"
                />
            </Head>
            <h1 className="title">Create Post</h1>
            {/* <div>{data.body}</div> */}

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea
                        rows="10"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={errors.body && "!ring-red-500"}
                    ></textarea>
                    {errors.body && <p className="error">{errors.body}</p>}
                    <button className="primary-btn mt-4" disabled={processing}>
                        Create Post
                    </button>
                </form>
            </div>
        </>
    );
}
