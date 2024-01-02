"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react"


function Navbar() {
   const {data:session ,status}=useSession()
    const [providers,setProviders]=useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false);
    console.log(session,status)
    useEffect(()=>{
        const setProvider=async()=>{
            const response=await getProviders();
        
            if (response && response.error) {
         
                console.error("Error fetching providers:", response.error);
            } else {
             
                setProviders(response);
            }
        }
        setProvider()
    },[])
    return (
        <nav className="w-full flex mb-4 pt-3 justify-between">
            <Link href='/' className=" flex text-gray-700">
                <Image src='/assets/images/logo.svg'
                    alt="promp"
                    height={30}
                    width={30}
                    className='mx-4'
                >

                </Image>
                <p className="logo_text">PromptAI </p>
            </Link>
            {
                <div className="sm:flex hidden ">
                    {
                        session?.user ? (
                            <div className="flex gap-3">
                                <Link href='/create-prompt' className="black_btn">
                                    Create Promt
                                </Link>
                                <button type="button" onClick={signOut} className="outline_btn">
                                    Sign Out
                                </button>
                                <Link href='/profile'>
                                    <Image src={session?.user.image}
                                        alt="profile"
                                        height={30}
                                        width={30}
                                        className='mx-4 rounded-lg'
                                    />
                                </Link>
                            </div>
                        ) : (<div>
                            {
                                providers&& Object.values(providers).map((provider)=>(
                                    <button type="button"
                                    key={provider.name} 
                                    onClick={() => signIn(provider.id)} className="outline_btn mx-7">
                                    Sign In
                                </button>
                                ))
                            }
                            
                        </div>
                        )
                    }
                </div>
            }
            {
                <div className="sm:hidden flex relative">
                    {
                        session?.user ? (
                            <div className="flex">

                                <Image src={session?.user.image}
                                    alt="profile"
                                    height={30}
                                    width={30}
                                    className='mx-4 rounded-lg'
                                    onClick={() => { setToggleDropdown((prev) => !prev); console.log(toggleDropdown) }}
                                />
                                {
                                    toggleDropdown && (
                                        <div className="dropdown ">
                                            <Link href='/profile' className="dropdown_link"
                                                onClick={() => setToggleDropdown(false)}>
                                                Profile
                                            </Link>
                                            <Link href='/create-promt' className="dropdown_link"
                                                onClick={() => setToggleDropdown(false)}>
                                                Create Prompt
                                            </Link>
                                            <button type="button" onClick={() => {
                                                setToggleDropdown(false);
                                                signOut
                                            }} className="black_btn w-3/4">
                                                Sign Out
                                            </button>
                                        </div>
                                    )
                                }
                            </div>
                        ) : (<div>
                            <button type="button" onClick={() => { }} className="outline_btn mx-7">
                                Sign In
                            </button>
                        </div>
                        )
                    }
                </div>
            }
        </nav>
    );
}

export default Navbar;