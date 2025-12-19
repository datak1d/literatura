const Card = ( {size = 50, children} ) => {
    return <div className="card">
        <img width={size} height={size} alt="Card image" />
        {children}
    </div>
}
export default Card;