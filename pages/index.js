import Navbar from "../components/navbar";
import Calculator from "../components/calculator";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";

export default function App() {
	return (
		<div className={styles.container}>
			<Navbar />

			<Calculator />

			<Footer />
		</div>
	);
}
