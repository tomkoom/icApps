import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { FramerStyles } from "./FramerStyles";

import {
	faTwitter,
	faTelegram,
	faDiscord,
	faMedium,
	faGithub,
	faSlack,
} from "@fortawesome/free-brands-svg-icons";

// GOOGLE API
import useGoogleSheets from "use-google-sheets";
import {
	faCalendarAlt,
	faArrowRight,
} from "../../../node_modules/@fortawesome/free-solid-svg-icons/index";

// Google Sheets API key
const googleSheetsApiKey = "AIzaSyAYlQkmy6vZa13H5dRahcSaq08P35woTZk";
const googleSheetId = "1gMBz0XnAu4FgiGGotrsi09EjOeIUyX7uO8fHi_k8E3c";

const UpcomingNfts = () => {
	// Google Sheets API

	const { data, loading, error, refetch } = useGoogleSheets({
		apiKey: googleSheetsApiKey,
		sheetId: googleSheetId,
		sheetsNames: ["Upcoming-NFTs"],
	});

	return (
		<>
			{loading ? (
				<div className="center">Loading... ⌛</div>
			) : error ? (
				<div className="center">Error!</div>
			) : (
				<div className="upcoming-nft">
					<Link className="back-btn" to="/">
						<motion.div
							whileHover={FramerStyles.buttons.whileHover}
							transition={FramerStyles.buttons.transition}
							className="back-btn__div"
						>
							<FontAwesomeIcon icon={faArrowLeft} />
						</motion.div>
					</Link>
					{/* <button className="refetch-btn" onClick={refetch}>Refetch</button> */}
					<div className="upcoming-nft-sales-intro">
						<div className="center">
							<h2>Upcoming NFT Sales &#38; Airdrops</h2>
							<p className="body-text2">
								{/* Information on this page should not be considered as financial advice. */}
								Please note: We do not guarantee information
								provided on this page is 100% accurate. Please
								do your own research.
							</p>
							<br />
							<a
								className="submit-btn"
								href="https://forms.gle/rFsaFEj3N8mgF9tz6"
								target="_blank"
								rel="noreferrer noopener"
							>
								Submit your project to the list
							</a>
						</div>
					</div>

					{data[0].data.map((nft) => (
						// Change key
						<div className="upcoming-nft__card" key={nft.Name}>
							<div className="upcoming-nft__card__main">
								<div className="upcoming-nft__card__main__heading">
									<h3 className="upcoming-nft__card__main__heading__title">
										{nft["Name"]}
									</h3>

									{nft["Date"] === "Sale is open" ? (
										<motion.div
											data-value="sale-is-open-btn"
											whileHover={
												FramerStyles.buttons.whileHover
											}
											transition={
												FramerStyles.buttons.transition
											}
											className="upcoming-nft__card__main__heading__date"
										>
											<a
												href={nft["Marketplace Link"]}
												target="_blank"
												rel="norefferrer noopener"
												className="sale-is-open-btn"
											>
												Sale is open{" "}
												<FontAwesomeIcon
													icon={faArrowRight}
													color="rgba(255,255,255,0.3)"
												/>
											</a>
										</motion.div>
									) : (
										<div className="upcoming-nft__card__main__heading__date">
											<div>
												<FontAwesomeIcon
													icon={faCalendarAlt}
													color="#484644"
												/>

												<p className="body-text">
													{`${nft["Date"]} ${nft["Time"]} ${nft["Time Zone"]}`}
												</p>
											</div>
										</div>
									)}

									{nft["Sale Info"] ? (
										<p>{nft["Sale Info"]}</p>
									) : null}
								</div>

								<p className="body-text ">
									{nft["Description"] &&
									nft["Description"].length > 140
										? `${nft["Description"].substring(
												0,
												140
										  )}...`
										: nft["Description"]}
								</p>
								<p className="body-text opacity66">
									{nft["Total NFTs"]
										? `Total Assets 🗿 ${nft["Total NFTs"]}`
										: null}
								</p>

								<ul className="upcoming-nft__card__main__social-links-list">
									<motion.li
										whileHover={
											FramerStyles.buttons.whileHover
										}
										transition={
											FramerStyles.buttons.transition
										}
										className="upcoming-nft__card__main__social-links-list__item"
										style={
											nft["Website"]
												? null
												: { display: "none" }
										}
									>
										<a
											href={nft["Website"]}
											target="_blank"
											rel="noopener noreferrer"
										>
											<FontAwesomeIcon icon={faGlobe} />
										</a>
									</motion.li>

									<motion.li
										whileHover={
											FramerStyles.buttons.whileHover
										}
										transition={
											FramerStyles.buttons.transition
										}
										className="upcoming-nft__card__main__social-links-list__item"
										style={
											nft["Twitter"]
												? null
												: { display: "none" }
										}
									>
										<a
											href={nft["Twitter"]}
											target="_blank"
											rel="noopener noreferrer"
										>
											<FontAwesomeIcon icon={faTwitter} />
										</a>
									</motion.li>

									<motion.li
										whileHover={
											FramerStyles.buttons.whileHover
										}
										transition={
											FramerStyles.buttons.transition
										}
										className="upcoming-nft__card__main__social-links-list__item"
										style={
											nft["Discord"]
												? null
												: { display: "none" }
										}
									>
										<a
											href={nft["Discord"]}
											target="_blank"
											rel="noopener noreferrer"
										>
											<FontAwesomeIcon icon={faDiscord} />
										</a>
									</motion.li>

									<motion.li
										whileHover={
											FramerStyles.buttons.whileHover
										}
										transition={
											FramerStyles.buttons.transition
										}
										className="upcoming-nft__card__main__social-links-list__item"
										style={
											nft["Telegram"]
												? null
												: { display: "none" }
										}
									>
										<a
											href={nft["Telegram"]}
											target="_blank"
											rel="noopener noreferrer"
										>
											<FontAwesomeIcon
												icon={faTelegram}
											/>
										</a>
									</motion.li>
									<motion.li
										whileHover={
											FramerStyles.buttons.whileHover
										}
										transition={
											FramerStyles.buttons.transition
										}
										className="upcoming-nft__card__main__social-links-list__item"
										style={
											nft["Dscvr"]
												? null
												: { display: "none" }
										}
									>
										<a
											href={nft["Dscvr"]}
											target="_blank"
											rel="noopener noreferrer"
										>
											Dscvr
										</a>
									</motion.li>
									<motion.li
										whileHover={
											FramerStyles.buttons.whileHover
										}
										transition={
											FramerStyles.buttons.transition
										}
										className="upcoming-nft__card__main__social-links-list__item"
										style={
											nft["Distrikt"]
												? null
												: { display: "none" }
										}
									>
										<a
											href={nft["Distrikt"]}
											target="_blank"
											rel="noopener noreferrer"
										>
											Distrikt
										</a>
									</motion.li>
								</ul>
							</div>
							<div className="upcoming-nft__card__img">
								{nft["Img2"] ? (
									<img
										className="upcoming-nft__card__img__item"
										src={nft["Img1"]}
										alt={`${nft["Name"]} img #1`}
									/>
								) : null}

								{nft["Img2"] ? (
									<img
										className="upcoming-nft__card__img__item"
										src={nft["Img2"]}
										alt={`${nft["Name"]} img #2`}
									/>
								) : null}

								{nft["Img3"] ? (
									<img
										className="upcoming-nft__card__img__item"
										src={nft["Img3"]}
										alt={`${nft["Name"]} img #3`}
									/>
								) : null}

								{nft["Img4"] ? (
									<img
										className="upcoming-nft__card__img__item"
										src={nft["Img4"]}
										alt={`${nft["Name"]} img #4`}
									/>
								) : null}
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default UpcomingNfts;
