// const searchForm = document.getElementById("github-form");
// const searchInput = document.getElementById("search");
// const userList = document.getElementById("user-list");
// const reposit = document.getElementById("repos-list");

// searchForm.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const username = searchInput.value.trim();

//   // Fetch user data from GitHub User Search Endpoint
//   const userResponse = await fetch(
//     `https://api.github.com/search/users?q=${username}`
//   );
//   const userData = await userResponse.json();
//   const user = userData.items[0]; // Assuming we want the first result

//   // Display user information
//   userList.innerHTML = `
//         <h2>${user.login}</h2>
//         <img src="${user.avatar_url}" alt="${user.login} avatar">
//         <a href="${user.html_url}" target="_blank">View Profile</a>
//     `;

//   // Fetch user repositories from GitHub User Repos Endpoint
//   const reposResponse = await fetch(
//     `https://api.github.com/users/${user.login}/repos`
//   );
//   const reposData = await reposResponse.json();

//   // Display user repositories
//   reposit.innerHTML = `
//         <h3>Repositories:</h3>
//         <ul>
//             ${reposData
//               .map(
//                 (repo) =>
//                   `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
//               )
//               .join("")}
//         </ul>
//     `;
// });

const searchForm = document.getElementById("github-form");
const searchInput = document.getElementById("search");
const userList = document.getElementById("user-list");
const reposit = document.getElementById("repos-list");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = searchInput.value.trim();

  // Fetch user data from GitHub User Search Endpoint
  const userResponse = await fetch(
    `https://api.github.com/search/users?q=${username}`
  );
  const userData = await userResponse.json();
  const user = userData.items[0]; // Assuming we want the first result

  // Display user information
  userList.innerHTML = `
        <h2>${user.login}</h2>
        <img src="${user.avatar_url}" alt="${user.login} avatar" id="avatar">
        <a href="${user.html_url}" target="_blank">View Profile</a>
    `;

  // Add event listener to the avatar
  const avatar = document.getElementById("avatar");
  avatar.addEventListener("click", async () => {
    // Fetch user repositories from GitHub User Repos Endpoint
    const reposResponse = await fetch(
      `https://api.github.com/users/${user.login}/repos`
    );
    const reposData = await reposResponse.json();

    // Display user repositories
    reposit.innerHTML = `
        <h3>Repositories:</h3>
        <ul>
            ${reposData
              .map(
                (repo) =>
                  `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
              )
              .join("")}
        </ul>
    `;
  });
});
