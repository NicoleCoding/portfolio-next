export default function Button(props) {
    return (
        <button className={`${props.className} ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={props.disabled ? undefined : props.onClick}
                disabled={props.disabled}
        >
            {props.text}
        </button>
    );

}