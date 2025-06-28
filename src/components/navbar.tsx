"use client"


import Link from 'next/link'
import { useSearchParams } from 'next/navigation'


const Navbar = () => {
    const searchParams=useSearchParams();
    const todosfilter= searchParams.get('todos');
  return (
    
    <nav>
      <Link href='/' className= {todosfilter===null?"active": ""}>All</Link>
      <Link href='/?todos=active' className= {todosfilter==="active"?"active": ""}> active</Link>
      <Link href='/?todos=completed' className= {todosfilter==="completed"?"active": ""}> completed</Link>
    </nav>
  )
}

export default Navbar
