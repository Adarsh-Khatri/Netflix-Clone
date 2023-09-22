import React from "react";
import { useDispatch } from "react-redux";
import { SELECT_GENRE_CONTAINER } from '../styles/SelectGenre.styled.js'
import { fetchDataByGenre } from "../store";

export default function SelectGenre({ genres, type }) {

  const dispatch = useDispatch();

  return (
    <SELECT_GENRE_CONTAINER className="d-flex"
      onChange={(e) => {
        dispatch(
          fetchDataByGenre({
            genres,
            genre: e.target.value,
            type,
          })
        );
      }}
    >
      {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </SELECT_GENRE_CONTAINER>
  );
}
