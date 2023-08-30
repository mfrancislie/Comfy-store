import { useNavigate } from 'react-router-dom';

/* eslint-disable react/prop-types */
const SubmitBtn = ({ text }) => {
  const navigate = useNavigate();
  const isSubmitting = navigate.isSubmitting === 'submitting';

  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-ring loading-md"></span>
        </>
      ) : (
        text || 'submit'
      )}
    </button>
  );
};

export default SubmitBtn;
