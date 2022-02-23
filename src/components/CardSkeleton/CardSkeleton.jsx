import skeletonStyles from './CardSkeleton.module.css'

const CardSkeleton = () => (
    <>
      <div className={skeletonStyles.skeletonCard}>
        <div className={skeletonStyles.skeletonContainer}>
          <div className={skeletonStyles.skeletonImg}></div>
          <div className={skeletonStyles.skeletonText}></div>
          <div className={skeletonStyles.skeletonText}></div>
        </div>
        <div className={skeletonStyles.skeletonPrice}></div>
      </div>
    </>
  );
  
  export { CardSkeleton };