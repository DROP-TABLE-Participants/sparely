// import "./humge-ui-framework.min.css";
// import "./iziModal.min.css";
// import "./lightbox.min.css";
// import "./main.css";

export default function DemoPage() {
	return (
		<div>
			<header className="shadow">
				<div className="wraper relative mrg-auto">
					<div className="logo pad-top-20 pad-bottom-20">
						<a href="index.html"><img src="/logo_biscuiti.svg" className="w120" /></a>
					</div>
					<div className="info">
						<span className="mrg-right-30">Сдруженние "Бъдеще за децата"</span>
						<span className="mrg-right-30"><a href="https://speckids.org/">www.speckids.org</a></span>
						<span><a href="https://www.facebook.com/speckids.org" target="_blank"><img src="/facebook_biscuiti.svg" className="w10" /></a></span>
					</div>
					<nav>
						<ul className />
					</nav>
					<div className="menu-call" onclick="$('.mobile-menu').toggleClass('open');$(this).toggleClass('open');return false;">
						<span />
					</div>
					<div className="cart-button">
						<div id="cartBadge" />
						<a href="cart.html"><img src="/shopping-cart(4)_biscuiti.svg" className="w25" /></a>
					</div>
				</div>
			</header>
			<section>
				<div className="pad-top-30 pad-bottom-30 mrg-bottom-20">
					<div className="wraper mrg-auto">
						<h1 className="allcaps bold text-center orange-text">Кошница</h1>
					</div>
				</div>
				<div className="cart-items wraper mrg-auto">
					<div className="cart-items wraper mrg-auto">
						<div className="table-container">
							<table className="pad-15 w100p stript">
								<thead>
								<tr>
									<th className="text-left">Наименование</th>
									<th>Количество</th>
									<th>Единична цена</th>
									<th>Сума</th>
									<th />
								</tr>
								</thead>
								<tbody id="products">
								<tr>
									<td className="text-left">Абонамент за кутия с бисквитки</td>
									<td>2</td>
									<td>21.00 лв.</td>
									<td>42.00 лв.</td>
									<td className="text-center"><a className="delete" data-id={82} href="#"><span className="material-icons">close</span></a></td>
								</tr>
								<tr>
									<td className="text-left">Бисквити "Брауни"</td>
									<td>1</td>
									<td>8.20 лв.</td>
									<td>8.20 лв.</td>
									<td className="text-center"><a className="delete" data-id={54} href="#"><span className="material-icons">close</span></a></td>
								</tr>
								<tr>
									<td className="text-left">Овесени бисквитки</td>
									<td>1</td>
									<td>8.80 лв.</td>
									<td>8.80 лв.</td>
									<td className="text-center"><a className="delete" data-id={39} href="#"><span className="material-icons">close</span></a></td>
								</tr>
								<tr>
									<td className="text-left">Бисквитки със сусамов тахан</td>
									<td>1</td>
									<td>8.90 лв.</td>
									<td>8.90 лв.</td>
									<td className="text-center"><a className="delete" data-id={77} href="#"><span className="material-icons">close</span></a></td>
								</tr>
								</tbody>
							</table>
						</div>
						<div className="text-right font14 bold mrg-top-20 orange-text">
							Общо: 67.90 лв.
						</div>
						<div className="row">
							<div className="col-100 mrg-top-35 text-center">
								<button className="action orange-button button" id="buy">
									Поръчай
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer className="pad-top-30 pad-bottom-20 orange text-center white-text">
				<div className="wraper mrg-auto">
					<div className="row text-left">
						<div className="col-70">
							<div className="row">
								<div className="col-20">
									<h5 className="font12 allcaps bold mrg-bottom-20">За нас</h5>
									<ul className />
								</div>
								<div className="col-20">
									<h5 className="font12 allcaps bold mrg-bottom-20">Бисквитките</h5>
									<ul className />
								</div>
								<div className="col-20">
									<h5 className="font12 allcaps bold mrg-bottom-20">Работилници</h5>
									<ul className />
								</div>
								<div className="col-20">
									<h5 className="font12 allcaps bold mrg-bottom-20">Блог</h5>
									<ul className />
								</div>
								<div className="col-20">
									<h5 className="font12 allcaps bold mrg-bottom-20">Контакти</h5>
									<p>
										Сдружение "Бъдеще за децата"<br />
										гр.Казанлък<br />
										ул. "Войнишка" 25<br />
										тел. 0878 379 261<br />
										www.speckids.org
									</p>
								</div>
							</div>
						</div>
						<div className="col-30">
							<div className="w140 h140 round white mrg-auto">
								<img src="/logo_biscuiti.png" />
							</div>
						</div>
					</div>
				</div>
				<div className="copyright">
					Copyright © 2021 Cookies. Всички права запазени.
					<a href="https://slavovstudio.bg/" target="_blank">Изработка на уеб сайт</a>
					от slavov/studio.
				</div>
			</footer>
			<div className="mobile-menu shadow">
				<ul className />
			</div>
		</div>
	);
}