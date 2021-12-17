import React from 'react'


const Link = ({className, href, children}) => {
		const item = {
			padding: "10px",
			margin: "12px",
		};
    const clickHandler = (e)=>{
        e.preventDefault();
        console.log(window.location.pathname)
        window.history.pushState({},'', href)
    }
    return (
        <li style={item}>
            <a onClick={clickHandler} href={href}>{children}</a>
		</li>
    )
}

export default Link
