async function getToken() {
  return await fetch(`https://vaste-app.herokuapp.com/api/token`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      // If request is not successful, display error message
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }

      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

async function sendTextContent(token, textContent) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    token,
    textContent,
  });

  return await fetch("https://vaste-app.herokuapp.com/api/text/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: raw,
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

export { getToken, sendTextContent };
