"use client"
import Form from "@/components/form";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

function CreatePrompt() {
  const {data: session } = useSession();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(null);
  const [post, setPost] = useState({
    prompt: '',
    tag: ''
  });
  // console.log(session)
  const createPrompt = async (e) => {
    e.preventDefault();
    
    setSubmitting(true);
    try {
        const response = await fetch("/api/prompt/new", {
            method: "POST",
            body: JSON.stringify({
              prompt: post.prompt,
              tag: post.tag,
              userId: session?.user._id
            }),
            headers: {
              "Content-Type": "application/json"
            }
          });
          
      console.log(response)
      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.error(error);
    }
      setSubmitting(false);
    
  };

  return (
    <div className="">
      <Form
        type='Create'
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
      />
    </div>
  );
}

export default CreatePrompt;
