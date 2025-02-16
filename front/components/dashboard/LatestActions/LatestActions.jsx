import Image from "next/image";
import Action from "./Action/Action";

const LatestActions = () => {
	return (
		<>
			<h1 className="admin__title">Останні дії</h1>
			<div className="main__actions actions mt-3 mb-3">
				<div className="actions__body">
					<Action type="add"/>
					<Action type="change"/>
					<Action type="change"/>
					<Action type="deleted"/>
					<Action type="deleted"/>
					<Action type="deleted"/>
					<Action type="add"/>
				</div>
			</div>
		</>
	);
};

export default LatestActions;