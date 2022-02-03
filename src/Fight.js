import { useState } from "react";

function Fight() {
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
    <button
      onClick={() => {
        fetch("https://api.github.com/users/rocambille")
          .then((response) => response.json())
          .then((data) => {
            setGithubUser(data);
          });
      }}
    >
      Go
    </button>
  );
}

export default Fight;
