import { robots } from "../data/robots";
import Card from "../section/Card";

function App() {
	return (
		<div className="wrapper">
			<div className="container">
				{robots.map((item) => {
					return (
						<Card
							key={item.id}
							image={item.id}
							name={item.name}
							email={item.email}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
