"use client"
const Form = ({
    type, post, setPost, submitting, handleSubmit
}) => {
    return (
        <section className="w-full max-w-full ">
            <h1 className="head_text text-left"> <span className="blue_gradient">{type} Post</span></h1>
            <p className="desc text-left">{type} and share amazing prompt with friends.</p>
            <form
                onSubmit={handleSubmit}
                className="mt-10 w-full px-8"
            >
                <label className="text-left">
                    <span className="text-semibold">Your AI Prompt</span>

                    <textarea 
                        value={post.prompt}
                        onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                        placeholder="Write your AI prompt....."
                        required
                        className="form_textarea bg-slate-200"
                    ></textarea>
                </label>
                <label className="text-left">
                    <span className="text-semibold">Tag <span className="text-normal">(#web ,#idea)</span></span>

                    <input
                        value={post.tag}
                        onChange={(e) => setPost({ ...post, tag: e.target.value })}
                        placeholder="#tag"
                        required
                        className="form_input bg-slate-200" />
                </label>
                <div className=" mt-10 flex ">
                <div className="text-gray-600 px-4">Cancel</div>
                <button 
                type="submit"
                disabled={submitting}
                className="text-white bg-primary-orange rounded-full"
               
                >{submitting?`${type}...`:type}</button>
                </div>
            </form>
        </section>
    );
}

export default Form;