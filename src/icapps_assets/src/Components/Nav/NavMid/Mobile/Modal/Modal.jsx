import React from "react";
import css from "./Modal.module.css";

// icons
import { iTwitter, iDiscord, iInfinity, iFire, iPlus } from "../../../../../Icons/Icons";
import CrossIcon from "../../../../../Icons/CrossIcon/CrossIcon";

// components
import NavLink from "./NavLink/NavLink";
import SignInBtn from "./SignInBtn/SignInBtn";
import ProfileActions from "./ProfileActions/ProfileActions";

// routes
import { toApps, toUpcoming, toSubmit } from "../../../../../Routes/routes";

// state
import { useDispatch, useSelector } from "react-redux";
import { setMobileMenuModal, selectMobileMenuModal } from "../../../../../State/modals";

// auth
import { useAuth } from "../../../../../Context/AuthContext";

const Modal = () => {
  const dispatch = useDispatch();
  const { principalId } = useAuth();
  const mobileMenuModal = useSelector(selectMobileMenuModal);

  return (
    <div>
      {mobileMenuModal && (
        <div className={css.modal} onClick={() => dispatch(setMobileMenuModal(false))}>
          <div className={css.content} onClick={(e) => e.stopPropagation()}>
            <div className={css.navlinks}>
              <NavLink label="Projects" to={toApps} icon={iInfinity} />
              <NavLink label="Upcoming" to={toUpcoming} icon={iFire} />
              <NavLink label="Submit" to={toSubmit} icon={iPlus} />

              <hr className={css.div} />
              {!principalId ? <SignInBtn /> : <ProfileActions />}

              <div className={css.socials}>
                <a
                  className={css.socialsI}
                  id={css.twitter}
                  href="https://twitter.com/DfinityApps"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {iTwitter}
                </a>
                <a
                  className={css.socialsI}
                  id={css.discord}
                  href="https://discord.gg/AnjyrfvvXX"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {iDiscord}
                </a>
              </div>
            </div>

            <div className={css.crossIcon}>
              <CrossIcon onClick={() => dispatch(setMobileMenuModal(false))} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
