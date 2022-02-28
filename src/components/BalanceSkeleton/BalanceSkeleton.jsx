import balanceSklStyles from "./BalanceSkeleton.module.css"

const BalanceSkeleton = () => {
  return (
    <div className={balanceSklStyles.skeletonContainer}>
        <div className={balanceSklStyles.titleSkeleton}></div>
        <div className={balanceSklStyles.balanceContainerSkeleton}>
            <div className={balanceSklStyles.ethBalanceSkeleton}></div>
            <div className={balanceSklStyles.usdBalanceSkeleton}></div>
        </div>
    </div>
  )
};

export { BalanceSkeleton };
