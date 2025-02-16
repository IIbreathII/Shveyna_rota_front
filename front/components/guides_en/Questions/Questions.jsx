import { useRef } from "react";
import "./Questions.css"
import Link from "next/link";

const Questions = () => {
	const menu = useRef();

	return (
		<>
			<Link href="/questions" className="menu-button">?</Link>
		</>
	);
};

export default Questions;