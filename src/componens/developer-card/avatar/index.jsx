export const Avatar = ({ className }) => {
  return (
    <div className={`${className} avatar`}>
      <img
        className="avatar__img"
        src="../../../../assets/images/img.webp"
        alt="Image"
      />
    </div>
  );
};
