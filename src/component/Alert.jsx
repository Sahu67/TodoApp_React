const Alert = ({type, msg}) => {
    const classes = `alert alert-${type}`;

    return (
        <div className="alert-box">
            <div className={classes}>{msg}</div>
        </div>
    );
}

export default Alert;