 import  Prompt from '@/models/prompt'
 import  connectToDB from '@/utils/database'
export const POST=async(req,res)=>{
    const {userId, prompt, tag}=await req.json()
   console.log(userId)
    try {
        await connectToDB();
        const newPrompt =await Prompt.create({
            creator:userId,
            prompt,
            tag,
        })
        await newPrompt.save()
        return new Response(JSON.stringify(newPrompt),{status:201})
    } catch (error) {
        console.log(error)
        return new Response("failed to create prompt ",{status:500})
    }
}
