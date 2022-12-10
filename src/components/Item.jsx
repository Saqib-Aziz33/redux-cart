function Item({ item }) {
  return (
    <div className="card bg-base-100 shadow-xl item">
      <figure>
        <img src={item.image} alt={item.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.title.slice(0, 40)}</h2>
        <p>{item.description.slice(0, 60)}...</p>
        <h4 className="text-primary font-bold card text-1xl">${item.price}</h4>
        <div className="card-actions">
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
export default Item;
