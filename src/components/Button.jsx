// eslint-disable-next-line react/prop-types
const Button = ({ styles, label }) => {
  return (
    <button
      className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-primary outline-none rounded-md`}
    >
      {label}
    </button>
  );
};

export default Button;
