//import React from 'react';
//import ReactDOM from 'react-dom';
//import './style/headerStyle.css'
import image from "./image/w.jpg"
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import {BiSolidCameraHome} from"react-icons/Bi"
import "./style/main.css"
function Header() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img src={image} alt="" />
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">AppFactory</a>
				<a href="/#">ProjectList</a>
				<a href="/#">about us</a>
				<a href="/#">our service<
					/a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
					

				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Header;

