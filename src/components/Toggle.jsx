import "./Toggle.css";


export const Toggle = ({ handleChange, isChecked }) => {
    return (
        <div className="toggle-container">
        <input
            type="text"
            id="check"
            className="toggle"
            onChange={handleChange}
        />
        <label htmlFor="check">Dark Mode</label>
        </div>
    );
};