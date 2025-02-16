import { useState } from "react";
import { motion } from "framer-motion";

export default function Spoiler({ title, text }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="spoller-questions">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="spoller-questions__button"
			>
				{title}
				<motion.div
					animate={{ rotate: isOpen ? 135 : 0 }}
					transition={{ duration: 0.2 }}
					className="spoller-questions__icon"
				>
					+
				</motion.div>
			</button>
			<motion.div
				initial={{ height: 0 }}
				animate={{ height: isOpen ? "auto" : 0 }}
				transition={{ duration: 0.2 }}
				className="overflow-hidden"
			>
				<p className="spoller-questions__body">{text}</p>
			</motion.div>
		</div>
	);
}