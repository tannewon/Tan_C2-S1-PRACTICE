export default function Place({id,  title, image, }) {
  return (
    <li key={id} className="place-item">
      <button>
        <img src={image} alt={image} />
        <h3>{title}</h3>
      </button>
    </li>
  );
}


