import React from "react";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import items from './db/accordion'
// import Nav from "./components/Nav";
const style ={
  width:'100vw',
  height:'100vh',
  backgroundColor:'lightGreen'
}
const App = () => {
  return (
		<div style={style}>
			<h1>Hello Africa</h1>
			{/* <Nav /> */}
			{/* {window.location.pathname === "/" ? (
				<Accordion items={items} />
			) : window.location.pathname === "/hello" ? (
				<Search />
			) : window.location.pathname === "/translate" ? (
				<Translate />
			) : (
				""
			)} */}
			<Translate />
			<Accordion items={items} />
		</div>
  );
};
export default App;
