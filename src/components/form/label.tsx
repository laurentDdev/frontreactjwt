
type props = {
    id:string
    text:string
}

const Label = ({id,text} : props) => {
    return (
        <label htmlFor={id}>{text}</label>
    );
};

export default Label;