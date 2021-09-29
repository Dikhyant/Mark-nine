import "./Card.css";

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-image-container"><img className="image" src={props.img} /></div>
            <div className="card-title">{props.title}</div>
        </div>
    )
}

export default Card;