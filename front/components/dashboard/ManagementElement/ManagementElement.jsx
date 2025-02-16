import Link from "next/link";

const ManagementElement = ({ title, number, link, addLink }) => {
	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			<Link href={link}>{title}</Link>
			<div className="list-group-item__block d-flex align-items-center gap-3">
				<span className="badge text-bg-primary rounded-pill">{number}</span>
				<Link href={addLink} type="button" className="btn btn-outline-success"><span className="_plus">+</span> Додати</Link>
			</div>
		</li>
	);
};

export default ManagementElement;