import react from "react";

function Fight() {
  return (
    <button
      onClick={() => {
        fetch("https://api.github.com/users/rocambille")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
      }}
    >
      Go
    </button>
  );
}

export default Fight;
