import Pages from "../components/Pages";
import "../Styles/Pages.css";

function ActionMovies({ title, fetchUrl }) {
  return <Pages title={title} fetchUrl={fetchUrl} />;
}

export default ActionMovies;
