import React, { useState, useEffect } from "react";

const style={
    display:'flex',
    flexDirection:'column'
}
const Translate = () => {
    const [term, setTerm] = useState('users');
    const [debounceTerm, setDebounceTerm] = useState(term)
    const [dbs, setDbs] = useState([])
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(term) setDebounceTerm(term);
            else{
                setDebounceTerm('posts')
            }
        },500);
        return()=>{
            clearTimeout(timer)
        }
    },[term])
    useEffect(() => {
		const changeHandler = async () => {
			const res = await fetch(
				"https://jsonplaceholder.typicode.com/" + debounceTerm
			);
			const data = await res.json();
            console.log(data)
			setDbs(data)
		};
        changeHandler();
	}, [debounceTerm]);
    return (
		<div>
			<div style={style}>
				<label>Enter Text</label>
				<input
					value={term}
					type="text"
					onChange={(e) => setTerm(e.target.value)}
				/>
			</div>
			{dbs.length>0&&dbs.map(db=>{
                return<div key = {db.id}>
                    <h3>{db.name?db.name:db.title}</h3>
                </div>
            })}
		</div>
	);
}

export default Translate
