import { Carrousel } from "./Carrousel";
import { TimeUntil } from "./TimeUntil";
function Featured() {
  return (
    <div className="featured_container">
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>
      <TimeUntil />
    </div>
  );
}

export { Featured };
