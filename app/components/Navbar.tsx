import React from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, auth } from "@/auth";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center text-black">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={38} />
        </Link>
        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <form action={async () =>{
                'use server'
                await signOut({redirect:true, redirectTo: '/'})
                }}>
                <button>Logout</button>
              </form>
              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
