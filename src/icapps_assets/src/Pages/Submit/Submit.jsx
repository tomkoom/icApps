import React, { useState } from "react";
import css from "./Submit.module.css";
import k from "../../../../../k/k";
import { toHome } from "../../Routes/routes";

// ReCAPTCHA
import ReCAPTCHA from "react-google-recaptcha";

// icons
import { iTwitter, iDiscord, iGithub, iTelegram, iMedium, iDatabase } from "../../Icons/Icons";

// state
import { useSelector } from "react-redux";
import { selectCategories } from "../../State/categories";

// submit btn
export const SubmitBtn = ({ submissionLoader, isVerified }) => {
  return (
    <button
      className={!isVerified ? `${css.submitBtn} ${css.disabled}` : css.submitBtn}
      disabled={!isVerified}
      type="submit"
    >
      {submissionLoader ? submissionLoader : "Submit"}
    </button>
  );
};

const Submit = () => {
  const [submissionData, setSubmissionData] = useState({
    category: "",
    name: "",
    website: "",
    twitter: "",
    discord: "",
    github: "",
    telegram: "",
    medium: "",
    canister: "",
    dscvr: "",
    distrikt: "",
    openChat: "",
    description: "",
    logoUrl: "",
    coverUrl: "",
    notes: "",
    // email
    // nft
    nftUnits: "",
    nftUnitPrice: "",
    nftSaleDate: "",
  });
  const [submissionLoader, setSubmissionLoader] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitted, setisSubmitted] = useState(false);

  const categories = useSelector(selectCategories);

  // destructure submission data
  const {
    category,
    name,
    website,
    twitter,
    discord,
    github,
    telegram,
    medium,
    canister,
    dscvr,
    distrikt,
    openChat,
    description,
    logoUrl,
    coverUrl,
    notes,
    // nft
    nftUnits,
    nftUnitPrice,
    nftSaleDate,
  } = submissionData;

  const handleInput = (e) => {
    setSubmissionData({ ...submissionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionLoader("Submitting...");
    try {
      const res = await fetch(`${k.GOOGLE_SHEET_LINK}?tabId=SubmittedApps`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([
          [
            category,
            name,
            website,
            twitter,
            discord,
            github,
            telegram,
            medium,
            canister,
            dscvr,
            distrikt,
            openChat,
            description,
            logoUrl,
            coverUrl,
            notes,
            // nft
            nftUnits,
            nftUnitPrice,
            nftSaleDate,

            new Date().toLocaleString(),
          ],
        ]),
      });
      // Call function
      await res.json();
      // Empty input values
      setSubmissionData({
        ...submissionData,
        name: "",
        website: "",
        canister: "",
      });
    } catch (err) {
      console.log(err);
    }
    setisSubmitted(true);
  };

  // RECAPTCHA
  function onRecaptcha() {
    setIsVerified(true);
  }

  const inputs = [
    {
      label: "Your Project name*",
      hint: "",
      name: "name",
      icon: "",
      data: name,
      placeholder: "Project name",
      type: "text",
      required: "required",
    },
    {
      label: "Website",
      hint: "",
      name: "website",
      icon: "",
      data: website,
      placeholder: "Website",
      type: "url",
      required: null,
    },
    {
      label: "Twitter",
      hint: "",
      icon: iTwitter,
      name: "twitter",
      data: twitter,
      placeholder: "https://twitter.com/project",
      type: "url",
      required: null,
    },
    {
      label: "Discord",
      hint: "Make sure the invite link will not expire!",
      icon: iDiscord,
      name: "discord",
      data: discord,
      placeholder: "Discord",
      type: "url",
      required: null,
    },
    {
      label: "GitHub",
      hint: "",
      icon: iGithub,
      name: "github",
      data: github,
      placeholder: "GitHub",
      type: "url",
      required: null,
    },
    {
      label: "Telegram",
      hint: "",
      icon: iTelegram,
      name: "telegram",
      data: telegram,
      placeholder: "Telegram",
      type: "url",
      required: null,
    },
    {
      label: "Medium",
      hint: "",
      icon: iMedium,
      name: "medium",
      data: medium,
      placeholder: "Medium",
      type: "url",
      required: null,
    },
    {
      label: "Frontend canister",
      hint: "",
      icon: iDatabase,
      name: "canister",
      data: canister,
      placeholder: "https://n7ib3-4qaaa-aaaai-qagnq-cai.raw.ic0.app/",
      type: "text",
      required: null,
    },
    {
      label: "Dscvr",
      hint: "",
      icon: "",
      name: "dscvr",
      data: dscvr,
      placeholder: "https://dscvr.one/p/icapps",
      type: "url",
      required: null,
    },
    {
      label: "Distrikt",
      hint: "",
      icon: "",
      name: "distrikt",
      data: distrikt,
      placeholder: "Distrikt",
      type: "url",
      required: null,
    },
    {
      label: "Open Chat",
      hint: "",
      icon: "",
      name: "openChat",
      data: openChat,
      placeholder: "Open Chat",
      type: "url",
      required: null,
    },
    {
      label: "Please enter a short description of your project",
      hint: "",
      icon: "",
      name: "description",
      data: description,
      placeholder: "Tagline",
      type: "text",
      required: null,
    },
    {
      label: "Logo image URL",
      hint: "",
      icon: "",
      name: "logoUrl",
      data: logoUrl,
      placeholder: "Logo img URL",
      type: "url",
      required: null,
    },
    {
      label: "Cover image URL",
      hint: "1500 x 500px",
      icon: "",
      name: "coverUrl",
      data: coverUrl,
      placeholder: "Cover img URL",
      type: "url",
      required: null,
    },
    {
      label: "Any additional notes",
      hint: "",
      icon: "",
      name: "notes",
      data: notes,
      placeholder: "Notes",
      type: "text",
      required: null,
    },
  ];

  const nftInputs = [
    {
      label: "Total assets",
      hint: "e.g. 10.000",
      icon: "",
      name: "nftUnits",
      data: nftUnits,
      placeholder: "Total assets",
      type: "text",
      required: null,
    },
    {
      label: "NFT unit price",
      hint: "In ICP",
      icon: "",
      name: "nftUnitPrice",
      data: nftUnitPrice,
      placeholder: "Unit price",
      type: "text",
      required: null,
    },
    {
      label: "NFT sale date",
      hint: "",
      icon: "",
      name: "nftSaleDate",
      data: nftSaleDate,
      placeholder: "Collection sale date",
      type: "text",
      required: null,
    },
  ];

  return (
    <section className={`${css.submit} container768`}>
      {!isSubmitted ? (
        <div>
          <h2 className="pageTitle">Submit Your Project</h2>

          <form className={css.form} onSubmit={handleSubmit}>
            {/* categories */}
            <div className={css.field}>
              <p className={css.label}>Project category</p>
              <ul>
                {categories.map((cat) =>
                  cat.id === "all" ? null : (
                    <li key={cat.id}>
                      <label htmlFor={cat.id}>
                        <input
                          id={cat.id}
                          value={cat.id}
                          type="radio"
                          name="category"
                          checked={category === cat.id}
                          onChange={handleInput}
                          className={css.category}
                        />
                        <div className={css.category__div}>
                          {cat.icon}&nbsp;&nbsp;{cat.name}
                        </div>
                      </label>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* inputs */}
            {inputs.map((input, i) => (
              <div className={css.field} key={i}>
                <label className={css.label} htmlFor={input.name}>
                  {input.label}
                  {input.icon && (
                    <span className={css.icon}>
                      &nbsp;&nbsp;
                      {input.icon && input.icon}
                    </span>
                  )}
                </label>
                {input.hint && <p className={css.hint}>{input.hint}</p>}
                <input
                  className={css.input}
                  type={input.type}
                  id={input.name}
                  name={input.name}
                  placeholder={input.placeholder}
                  autoComplete="off"
                  value={input.data}
                  onChange={handleInput}
                  required={input.required}
                />
              </div>
            ))}

            {/* nft input */}
            {submissionData.category === "nfts" && (
              <div>
                <br />
                <h3>NFT collection info</h3>
                <br />
                {nftInputs.map((nftInput, i) => (
                  <div className={css.field} key={i}>
                    <label className={css.label} htmlFor={nftInput.name}>
                      {nftInput.label}
                      {nftInput.icon && (
                        <span className={css.icon}>
                          &nbsp;&nbsp;
                          {nftInput.icon && nftInput.icon}
                        </span>
                      )}
                    </label>
                    {nftInput.hint && <p className={css.hint}>{nftInput.hint}</p>}
                    <input
                      className={css.input}
                      type={nftInput.type}
                      id={nftInput.name}
                      name={nftInput.name}
                      placeholder={nftInput.placeholder}
                      autoComplete="off"
                      value={nftInput.data}
                      onChange={handleInput}
                      required={nftInput.required}
                    />
                  </div>
                ))}
              </div>
            )}

            <div className={css.recaptcha}>
              <ReCAPTCHA sitekey={k.RECAPTCHA_SITE_KEY} onChange={onRecaptcha} />
            </div>

            <SubmitBtn submissionLoader={submissionLoader} isVerified={isVerified} />
          </form>
        </div>
      ) : (
        <div className={css.submissionSuccess}>
          <div className={css.submissionSuccess__content}>
            <p className="bodyTextLight">
              Your project has been successfully submitted! Go{" "}
              <span onClick={toHome} style={{ textDecoration: "underline", cursor: "pointer" }}>
                home
              </span>
            </p>
          </div>
        </div>
      )}
      {/* Test recaptcha site key: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI */}
    </section>
  );
};

export default Submit;
