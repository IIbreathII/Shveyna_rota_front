import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const PopupLink = ({ href, text, img }) => {
	const [copied, setCopied] = useState(false)

	function handleCopy(e, text) {
		navigator.clipboard.writeText(text);
		const current = e.currentTarget
		if (!copied) {
			console.log(1);
			current.classList.add("show-ok")
			setCopied(true)
			setTimeout(() => {
				current.classList.remove("show-ok")
				setCopied(false)
			}, 2000)
		}
	}

	return (
		<div className="link-wrapper">
			<Link className="popup-link _paypal" target="_blank" href={href}>
				<div className="paypalimg">
					<Image
						src={img}
						alt="logo"
						width={85}
						height={85}
						className="logo-img"
					/>
				</div>
				<span>
					{text}
				</span>
			</Link>
			<button onClick={(e) => handleCopy(e, text)} type="button" className="popup__button">
				{copied
					? <Image
						src="/images/conblock/ok.png"
						alt="logo"
						width={35}
						height={35}
						className="ok-img"
					/>
					: <Image
						src="/images/conblock/content-copy.png"
						alt="logo"
						width={35}
						height={35}
						className="copy-img"
					/>
				}
			</button>
		</div>
	);
};

export default PopupLink;