import Link from "next/link";

export default function AdminLayout({ children }) {
	return (
		<>
			<header>
				<nav className="navbar navbar-expand-lg bg-body-tertiary">
					<div className="container-lg">
						<Link style={{fontSize: "26px"}} className="navbar-brand" href="/dashboard">Адміністратор</Link>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNavDropdown">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a style={{fontSize: "20px", fontWeight: "bold"}} className="nav-link active" aria-current="page" href="/">Повернутися до сайту</a>
								</li>
								<li className="nav-item dropdown">
									<Link style={{fontSize: "20px"}} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										Керування елементами сторінки
									</Link>
									<ul className="dropdown-menu">
										<li><Link className="dropdown-item" href="/dashboard/slides">Слайди</Link></li>
										<li><Link className="dropdown-item" href="/dashboard/cards">Статистичні картки</Link></li>
										<li><Link className="dropdown-item" href="/dashboard/media">Медіа посилання</Link></li>
										<li><Link className="dropdown-item" href="/dashboard/partners">Партнери</Link></li>
										<li><Link className="dropdown-item" href="/dashboard/markers">Маркери на мапі</Link></li>
										<li><Link className="dropdown-item" href="/dashboard/categories">Категорії кібер-одягу</Link></li>
										<li><Link className="dropdown-item" href="/dashboard/masterclass">Майстер-класи</Link></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
			{children}
		</>
	);
}