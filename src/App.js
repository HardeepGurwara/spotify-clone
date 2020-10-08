import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import spotifyWebApi from "spotify-web-api-js";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  //run code based on a given condition
  useEffect(() => {
    // it runs whattever code is inside here
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("37i9dQZEVXcMzDpyroilUZ").then((discover_weekly) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: discover_weekly,
        });
      });
    }
  }, []);

  console.log("person", user);
  console.log("Token", token);
  return (
    <div className="app">
      {/* hello */}
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
