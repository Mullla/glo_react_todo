import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <h1>The page wasn't found</h1>
        <Link to="/" className="link">
          Go to main
        </Link>
      </div>
    </div>
  );
};
