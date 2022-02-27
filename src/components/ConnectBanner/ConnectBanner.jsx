import Image from "next/image";
import bannerImg from "./wallet2.png";
import { ConnectWalletBtn } from "../ConnectWalletBtn/ConnectWalletBtn";
import bannerStyles from "./ConnectBanner.module.css";

const ConnectBanner = () => {
  return (
    <div className={bannerStyles.bannerContainer}>
      <div className={bannerStyles.infoContainer}>
        <h2 className={bannerStyles.bannerTitle}>
          Connect your wallet and preview your portfolio
        </h2>
        <ConnectWalletBtn />
      </div>
      <div className={bannerStyles.img}>
        <Image src={bannerImg} height={250} width={351.69} alt="Main img" />
      </div>
    </div>
  );
};

export { ConnectBanner };
