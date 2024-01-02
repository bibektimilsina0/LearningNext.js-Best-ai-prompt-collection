"use client"
import { useEffect, useState } from "react";
import PromptCard from "./promptcard";



function Feed() {
    const PromptCardList=({data,handleTagClick})=>{

        return (
            <div className="prompt_layout">
                {data.map((post)=>(
                    <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                    />
                ))}
            </div>
        )
    }
    const [searchText,setSearchText]=useState('')
    const [posts ,setPosts]=useState([])
    useEffect(()=>{
        const getprompts=async()=>{
            try {
                const response = await fetch("/api/prompt", {
                    method: "GET",
                  });
                  const data= await response.json()
             
              setPosts(data)
            } catch (error) {
                console.log(error)
            }
        }
        getprompts()
    },[])
    return ( 
        <section className="Feed">
            <form className="relative w-full flex-center">
                <input type="text"
                placeholder="search for tag or username"
                value={searchText}
                onChange={(e)=>{setSearchText(e.target.value)}}
                required
                className="search_input peer" />
            </form>
            <PromptCardList
            data={posts}
            handleTagClick={()=>{}}>

            </PromptCardList>
        </section>
    );
}

export default Feed;