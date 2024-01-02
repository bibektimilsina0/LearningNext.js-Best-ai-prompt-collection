import Feed from '@/components/feed'
import Image from 'next/image'

export default function Home() {
  
  return (
    <section className=" w-full flex min-h-screen flex-col items-center justify-between p-6">
      <div>
        <h1 className=' head_text text-center'>Discover & Share
        <br/> 
        <span className='orange_gradient text-center'>AI-powered Prompts</span>
        </h1>
        <p className='desc text-center pt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto sint, soluta ab dolore veniam id illo minima ullam rerum voluptas reprehenderit, dicta eaque cupiditate voluptatem sequi asperiores voluptates nihil ex.</p>
      </div>
      <div>
      <Feed/>
      </div>
  
    </section>
  )
}
