import { useState } from "react";

function Card() {
  const [githubUserLogin, setGithubUserLogin] = useState("");
  const [githubUser, setGithubUser] = useState();

  return githubUser ? (
    <figure className="card">
      <img
        className="card-img"
        src={githubUser.avatar_url}
        alt={githubUser.login}
      />
      <figcaption className="card-content">
        <h1>{githubUser.login}</h1>
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
              setGithubUser(data);
            });
        }}
      >
        Go
      </button>
    </>
  );
}

export default Card;
