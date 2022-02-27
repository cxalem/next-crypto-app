import loadingDotsStyles from "./LoadingDots.module.css"

const LoadingDots = () => {
  return (
    <div className={loadingDotsStyles.col3}>
      <div className={loadingDotsStyles.snippet}>
        <div className={loadingDotsStyles.stage}>
          <div className={loadingDotsStyles.dotPulse}></div>
        </div>
      </div>
    </div>
  );
};

export { LoadingDots };
