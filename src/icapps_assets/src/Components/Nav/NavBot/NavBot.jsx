import React from "react";
import css from "./NavBot.module.css";

// icons
import { iSun, iMoon } from "../../../Icons/Icons";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setTheme, selectTheme } from "../../../State/theme";
import { selectIcpPrice, selectIcp24hPriceChange } from "../../../State/icpPrice";

const NavBot = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const icpPrice = useSelector(selectIcpPrice);
  const icp24hPriceChange = useSelector(selectIcp24hPriceChange);

  const changeTheme = (theme) => {
    return {
      light: { value: "dark" },
      dark: { value: "light" },
    }[theme];
  };

  return (
    <div className={css.nav}>
      <div className={css.themeSwitch} onClick={() => dispatch(setTheme(changeTheme(theme)))}>
        {theme === "light" ? iSun : theme === "dark" ? iMoon : null}
      </div>
      <div className={css.icpPriceBadge}>
        <div>
          <p>ICP&nbsp;{`$${icpPrice}`}</p>&nbsp;
          <span
            className={css.icpPriceChange}
            style={
              icp24hPriceChange > 0
                ? { color: "#24a148" }
                : icp24hPriceChange < 0
                ? { color: "#fa4d56" }
                : { color: "#697077" }
            }
          >{`${Number(icp24hPriceChange).toFixed(2)}%`}</span>
          &nbsp;
          <span className={css.icpPriceChangeTime}>24h</span>
        </div>
      </div>
    </div>
  );
};

export default NavBot;
