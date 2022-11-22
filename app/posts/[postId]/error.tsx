'use client';

const Error = ({error, reset}: {error: Error; reset: () => void}) => {
  return (
    <div>
      <h1>⚠️Something went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
};

export default Error;
