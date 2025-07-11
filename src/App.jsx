import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import LngLayout from "./LngLayout";
import "./scss/App.scss";
import getStorage from "./utils/getStorage";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Navigate to={`/${getStorage()}`} replace />}
				/>
				<Route path="/:lng/*" element={<LngLayout />} />
			</Routes>
		</Router>
	);
}

export default App;
