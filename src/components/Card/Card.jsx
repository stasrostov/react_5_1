import PropTypes from 'prop-types';
import './Card.css'
const Card = ({ children, title, text }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            {children}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="/#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    text: PropTypes.string,
};

export default Card;
