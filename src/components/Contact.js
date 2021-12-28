import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./stylesheets/Contact.css";
import { Typography } from "@mui/material";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

export default function Contact({ isOn }) {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
	const [state, handleSubmit] = useForm("mayazako");
	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	if (state.succeeded) {
		return (
			<div style={{ color: "white", textAlign: "center" }} className="contact">
				<p>We will get back to you as soon as possible!</p>
			</div>
		);
	}
	return (
		<div
			className="contact"
			style={{
				color: isOn ? "black" : "#f3f3f3",
			}}
		>
			<form
				className="form"
				onSubmit={handleSubmit}
				style={{
					backgroundColor: isOn ? "white" : "#181818",
				}}
			>
				<Typography className="contact__title" variant={windowDimensions.width < 600 ? "h5" : "h4"}>
					Got A Question?
				</Typography>
				<label className="name__label" htmlFor="name">
					First Name & Last Name
				</label>
				<input id="name" type="text" name="name" />
				<label className="email__label" htmlFor="email">
					Email Address
				</label>
				<input id="email" type="email" name="email" />
				<ValidationError prefix="Email" field="email" errors={state.errors} />
				<label className="message__label" htmlFor="message">
					Message
				</label>
				<textarea id="message" name="message" />
				<ValidationError prefix="Message" field="message" errors={state.errors} />
				<br />
				<button className="submit__button" type="submit" disabled={state.submitting}>
					Submit
				</button>
			</form>
		</div>
	);
}
