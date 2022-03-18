import React from "react";
import Pages from "../components/Pages";

function ActionMovies({ title, fetchUrl }) {
  return <Pages title={title} fetchUrl={fetchUrl} />;
}
export default ActionMovies;
