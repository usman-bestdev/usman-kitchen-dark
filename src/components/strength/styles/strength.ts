import styles from "./strength.module.css";

export const mainContainerClasses = `
${styles.mainContainer}`;

export const containerClasses = `d-flex 
justify-content-center 
align-items-center 
flex-column`;

export const cardStyleDarkClasses = `border-0 ${styles.strengthCardStyle} 
${styles.strengthCardDarkStyle}`;

export const cardStyleLightClasses = `${styles.strengthCardStyle} 
${styles.strengthCardLightStyle}`;

export const strengthImageContainerClasses = `${styles.strengthCardImageContainer} 
position-relative`;

export const strengthCardHeadingClasses = `text-center text-white mt-3 fs-4`;

export const strengthDescriptionClasses = `text-center mt-3 secondaryColor pb-5`;

export const mainHeadingClasses = `primaryColor mt-10`;

export const strengthSeparatorImageClasses = `${styles.strengthSeparatorImage} position-relative`;

export const subHeadingClasses = `text-white fs-2 mt-4`;

export const mainRowClasses = `m-0 mt-5`;
