import "../character-ratings.css";

export function RatingTableRow({ item, isEven }) {
  const skills = item.skillset.join(", ");
  return (
    <tr className={`${isEven ? "light" : "dark"}`} key={item.name}>
      <td>{item.name}</td>
      <td>{skills}</td>
      <td>{item.votes}</td>
    </tr>
  );
}
