import React from 'react'
import Link from './Link'
const Nav = (props) => {
    console.log(props)
    const style = {
        display:'flex',
        listStyle:'none',
        padding:'0',
    }
    return (
		<ul style={style}>
				<Link href="/hello">Home</Link>
				<Link href="/list">About</Link>
				<Link href="/translate">Translate</Link>
		</ul>
	);
}

export default Nav
