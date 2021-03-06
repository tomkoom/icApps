import React from "react";
import css from "./Home.module.css";

// icons
import { iArrowRight } from "../../Icons/Icons";

// routes
import { toApps, toUpcoming } from "../../Routes/routes";

// components
import { JoinCommunity, NftSales, HighlightedProjects } from "./index";

// state
import { useSelector } from "react-redux";
import { selectProjects, selectNFTs } from "../../State/projects";

const ViewAllBtn = ({ nav }) => {
  return (
    <button className={css.viewAll} onClick={nav}>
      View all &#62;
    </button>
  );
};

const Home = () => {
  const projects = useSelector(selectProjects);
  const nfts = useSelector(selectNFTs);

  return (
    <main className={css.home}>
      <section className={css.hero}>
        <h2 className={`${css.homeTitle} pageTitle`}>
          Internet Computer projects community portal 🌀
        </h2>
        <p className="text">Discover new apps, keep an eye out for upcoming NFT sales and more.</p>
      </section>

      <div className={css.highlights}>
        <div className={css.highlightsI}>
          <a
            className={css.highlightsILinkBlock}
            href="https://entrepot.app/marketplace/ic-apps"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className={css.highlightsInfo}>
              <span className={css.highlightsIcon}>🐋</span>
              <h3>icApps NFTs are tradable on Entrepot</h3>
            </div>
            <span className={css.rightArrowIcon}>{iArrowRight}</span>
          </a>
        </div>
        <div className={css.highlightsI}></div>
      </div>

      {/* recently added apps */}
      <section className={css.home__apps}>
        <div className={css.sectionTitle}>
          <h3>Recently added apps</h3>
          <ViewAllBtn nav={toApps} />
        </div>
        <HighlightedProjects
          projects={
            projects.length > 0 && projects.filter((project) => project.category !== "NFTs")
          }
        />
      </section>

      {/* recently added nfts */}
      <section className={css.home__apps}>
        <div className={css.sectionTitle}>
          <h3>Recently added NFTs</h3>
          <ViewAllBtn nav={toApps} />
        </div>
        <HighlightedProjects
          projects={
            projects.length > 0 && projects.filter((project) => project.category === "NFTs")
          }
        />
      </section>

      {/* popular apps */}
      <section className={css.home__apps}>
        <div className={css.sectionTitle}>
          <h3>Popular apps</h3>
          <ViewAllBtn nav={toApps} />
        </div>
        <HighlightedProjects
          projects={
            projects.length > 0 &&
            projects
              .filter((project) => project.upvotedBy)
              .filter((project) => project.category !== "NFTs")
              .sort((a, b) => b.upvotedBy.length - a.upvotedBy.length)
          }
        />
      </section>

      {/* popular nfts */}
      <section className={css.home__apps}>
        <div className={css.sectionTitle}>
          <h3>Popular NFTs</h3>
          <ViewAllBtn nav={toApps} />
        </div>
        <HighlightedProjects
          projects={
            projects.length > 0 &&
            projects
              .filter((project) => project.upvotedBy)
              .filter((project) => project.category === "NFTs")
              .sort((a, b) => b.upvotedBy.length - a.upvotedBy.length)
          }
        />
      </section>

      {/* upcoming nft sales */}
      <section className={css.home__upcomingNfts}>
        <div className={css.sectionTitle}>
          <h3>Upcoming NFT sales</h3>
          <ViewAllBtn nav={toUpcoming} />
        </div>

        <NftSales nftSalesFiltered={nfts.filter((nft) => nft.nftSaleStatus === "Upcoming")} />
      </section>

      {/* ongoing nft sales */}
      <section className={css.home__upcomingNfts}>
        <div className={css.sectionTitle}>
          <h3>Ongoing NFT sales</h3>
          <ViewAllBtn nav={toUpcoming} />
        </div>

        <NftSales nftSalesFiltered={nfts.filter((nft) => nft.nftSaleStatus === "Open")} />
      </section>

      {/* join community */}
      <section className={css.home__nftCollections}>
        <div className={css.sectionTitle}>
          <h3>Join icApps community</h3>
        </div>
        <JoinCommunity />
      </section>
    </main>
  );
};

export default Home;
