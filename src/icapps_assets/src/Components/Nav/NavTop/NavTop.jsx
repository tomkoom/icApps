import React from "react";
import css from "./NavTop.module.css";
import { toApps, toUpcoming } from "../../../Routes/routes";

// redux
import { useSelector } from "react-redux";
import { selectProjectsLength, selectNFTs } from "../../../State/projects";

const NavTop = () => {
  const projectsLength = useSelector(selectProjectsLength);
  const nfts = useSelector(selectNFTs);
  const upcomingNFTsLength = nfts.filter((nft) => nft.nftSaleStatus === "Upcoming").length;
  const ongoingNFTsLength = nfts.filter((nft) => nft.nftSaleStatus === "Open").length;

  return (
    <div className={css.nav}>
      <ul>
        <li>
          Projects:{" "}
          <button className="navlink" onClick={() => toApps()}>
            {projectsLength}
          </button>
        </li>
        <li>
          Upcoming NFT sales:{" "}
          <button className="navlink" onClick={() => toUpcoming()}>
            {upcomingNFTsLength}
          </button>
        </li>
        <li>Ongoing NFT sales: {ongoingNFTsLength}</li>
        <li>
          Highlights:{" "}
          <a href="https://dfinity.org/grants" target="_blank" rel="noreferrer noopener">
            Developer Grants
          </a>
        </li>
        <li>
          Featured NFTs:{" "}
          <a
            href="https://entrepot.app/marketplace/poked"
            rel="noreferrer noopener"
            target="_blank"
          >
            PokedBots
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavTop;
