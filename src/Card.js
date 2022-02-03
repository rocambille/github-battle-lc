import { useState } from "react";

function Card({ player, setPlayer }) {
  const [githubUserLogin, setGithubUserLogin] = useState("");

  return player ? (
    <figure className="card">
      <img className="card-img" src={player.avatar_url} alt={player.login} />
      <figcaption className="card-content">
        <h1>{player.login}</h1>
        {player.weapon ? (
          player[player.weapon]
        ) : (
          <div>
            <button
              onClick={() => {
                setPlayer({ ...player, weapon: "public_repos" });
              }}
            >
              Re
            </button>
            <button
              onClick={() => {
                setPlayer({ ...player, weapon: "public_gists" });
              }}
            >
              Gi
            </button>
            <button
              onClick={() => {
                setPlayer({ ...player, weapon: "followers" });
              }}
            >
              Fwer
            </button>
            <button
              onClick={() => {
                setPlayer({ ...player, weapon: "following" });
              }}
            >
              Fing
            </button>
          </div>
        )}
      </figcaption>
    </figure>
  ) : (
    <>
      <input
        type="text"
        onChange={(event) => {
          setGithubUserLogin(event.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch(`https://api.github.com/users/${githubUserLogin}`)
            .then((response) => response.json())
            .then((data) => {
              setPlayer(data);
            });
        }}
      >
        Go
      </button>
    </>
  );
}

export default Card;
