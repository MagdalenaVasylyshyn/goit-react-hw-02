const Feedback = ({ feedbacks: { good, neutral, bad}, total, percent}) => {
    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {percent}%</p>
        </div>
    )
}

export default Feedback