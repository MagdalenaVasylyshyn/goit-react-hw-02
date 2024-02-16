const Notification = ({ total }) => {
    return total === 0 ? <p>No feedback yet</p> : null;
}

export default Notification