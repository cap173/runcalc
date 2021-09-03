import logo from "../public/logo.png";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Navbar() {
	return (
		<div>
			<Head>
				<title>RunCalc</title>
				<meta name="description" content="Running split time calculator" />
				<link rel="icon" href="/icon.png" />
			</Head>

			<Image src={logo} alt="RunCalculator Logo" />

			<div className={styles.topnav}>
				<div className={styles.topnav_centered}>
					<Link href="/">
						<a>Calculator </a>
					</Link>
					<Link href="/about">
						<a> About</a>
					</Link>
				</div>
			</div>

			{/* <h1 style={{ textAlign: "center" }}>
				<Link href="/">
					<a>Calculator </a>
				</Link>
				<Link href="/about">
					<a> About</a>
				</Link>
			</h1> */}
		</div>
	);
}
