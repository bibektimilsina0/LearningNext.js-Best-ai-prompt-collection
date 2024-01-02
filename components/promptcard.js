"use client"

import { useState } from "react";
import Image from "next/image"
function PromptCard({post ,handleTagClick}) {
    const [copied ,setCopied]=useState('')
  
    return (  
        <div className="prompt_card">
           {/* <div className="flex justify-between items-start gap-5">

            <div className="flex-1 flex  justify-start">
                <Image
                src={post.creator.image}
                alt="user-image"
                width={40}
                height={40}
                className="rounded-full object-contain "
                />
                <div className="flex-col">
                    <h3 className=" text-gray-900">{post.creator.username}</h3>
                    <p className="font-inter text-gray-500" >{post.creator.email}</p>
                </div>
              
            </div>
            <div className="copy_btn" onClick={()=>{}}>
                    <Image
                    src={copied===post.prompt?'/assets/icons/tick.svg':'/assets/icons/copy.svg'
                }
                width={15}
                height={15}
                    />
                    </div>
           </div>
           <p>{post.prompt}</p>
           <P>{post.tag}</P> */}
        </div>
    );
}

export default PromptCard;