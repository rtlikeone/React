function Card({ image, name, email }) {
	return (
		<div className="card">
			<img src={`https://robohash.org/${image}`} alt="" />
			<div className="">
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;
