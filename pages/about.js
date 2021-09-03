import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const About = () => {
	return (
		<div className={styles.container}>
			<Navbar />

			<div
				className={styles.calc_background}
				style={{
					textAlign: "justify",
					paddingLeft: "15px",
					paddingRight: "15px",
				}}
			>
				<p>
					This app is intended to help users calculate the time splits needed to
					reach their running time goals. It was created using Next.js, React,
					and CSS. The code for this project can be found on Github.
				</p>
				<p>
					The app was created by Chris Paniagua, a Computer Science graduate of
					Georgetown University. The inspiration for this project came after a
					run when Chris wanted an easier way to calculate split times for times
					and distances that are more difficult to calculate mentally e.g.,
					running 1.5 mi. in 12&apos; 15&quot; with .5 mi. splits. You can learn
					more about Chris and his experiences by visiting his{" "}
					<a
						className={styles.links}
						href="https://www.linkedin.com/in/christopher-paniagua-0a732a325/"
					>
						LinkedIn page
					</a>
					.
				</p>
			</div>

			<Footer />
		</div>
	);
};

export default About;
