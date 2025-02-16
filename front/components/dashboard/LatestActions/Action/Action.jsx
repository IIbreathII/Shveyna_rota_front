import Image from "next/image";

const Action = ({ type }) => {
	return (
		<div className="actions__action">
			<Image
				src={`/images/admin/${type}.svg`}
				alt="icon"
				width={26}
				height={26}
			/>
			<div className="actions__name">Елемент(6) видалено | Навчальні матеріали</div>
		</div>
	);
};

export default Action;