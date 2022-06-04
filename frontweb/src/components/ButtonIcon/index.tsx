import './styles.css';

type Props = {
    text: string;
}

const ButtonIcon = ({ text } : Props) =>{
    return (
        <button className="btn btn-primary btn-icon">
           <h6>{text}</h6>
            </button>
    );
}

export default ButtonIcon;