import './Input.css';

export default function Input({ svgPathLeft, placeholder, svgPathRight }) {
  return (
    <div className="input-wrapper">
        {
            svgPathLeft && 
            <img src={`/${svgPathLeft}`} alt="left img" />
        }
        <input type="text" placeholder={placeholder}/>
        {
            svgPathRight && 
            <img src={`/${svgPathRight}`} alt="right img" />
        }
    </div>
  );
}
