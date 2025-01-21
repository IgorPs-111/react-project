// eslint-disable-next-line react/prop-types
const HeadingSection = ({ headingText, className }) => {
  return (
    <>
      {headingText && (
        <div className={`${className} section-heading`}>
          <h1>{headingText}</h1>
        </div>
      )}
    </>
  );
};

export default HeadingSection;
