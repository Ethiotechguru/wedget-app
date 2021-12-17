import React,{useState,useEffect,useRef} from 'react';
import Text from './Text';
const visible = "visible";
const active = "active";
const transition = "transition";

const Dropdown = ({ options, selected, onSelectionChange, label }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();
	useEffect(() => {
		const onBodyClick = (e) => {
			console.log(ref.current);
			if (ref.current.contains(e.target)) {
				return;
			}
			setOpen(false);
		};
		document.body.addEventListener("click", onBodyClick);
		return () => {
			document.body.removeEventListener("click", onBodyClick);
		};
	}, []);
	let renderedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null;
		}
		return (
			<div
				key={option.value}
				className="item"
				onClick={(e) => {
					e.preventDefault();
					onSelectionChange(option);
				}}
			>
				{option.label}
			</div>
		);
	});

	return (
		<React.Fragment>
			<div className="ui form">
				<div className="field">
					<label>Select {label}</label>
					<div
						ref={ref}
						onClick={() => {
							console.log(open);
							setOpen(!open);
						}}
						className={`ui selection dropdown ${
							open ? visible + " " + active : ""
						}`}
					>
						<i className="dropdown icon"></i>
						<div className="text">{selected.label}</div>
						<div
							className={`menu ${
								open ? visible + " " + transition : ""
							}`}
						>
							{renderedOptions}
						</div>
					</div>
				</div>
			</div>
			<Text color={selected.value} />
		</React.Fragment>
	);
};

export default Dropdown
