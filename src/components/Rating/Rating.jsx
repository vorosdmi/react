import './Rating.css';

export default function Rating({ num }) {
  return (
    <div className="rating">
        <img src="/star.svg" alt="rating" /> 
        <span>{num}</span>     
    </div>
  );
}
