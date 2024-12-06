const postList = document.querySelector('.postList');

let userData;

function render(posts) {
  postList.innerHTML = '';
  for (const post of posts) {
    postList.innerHTML = `
    <li class="posts">
        <div class="user-info" data-id="${post.id}"></div>
        <div class="post-container">
          <h2>${post.title}</h2>
          <p class="info">${post.body}</p>
          <div class="reactuions">
            <p class="like">${post.reactuions.likes}</p>
            <p class="dislike">${post.reactuions.dislikes}</p>
          </div>
        </div>
        <div class="comment">
          <p class="comments">Comments</p>
          <div class="post-comments" data-id="${post.id}"></div>
        </div>
      </li>
    `
  }
  userInfoBody(userData.users);
}

function bindUserInfoBody(users) {
  const userInfoBody = Array.from(document.querySelectorAll('.user-info'));
  for (const user of users) {
    const matchedusers = userInfoBody.findIndex(userInfoBody => Number(userInfoBody.dataset.id) == user.id);
    userInfoBody[matchedusers].innerHTML = `
    
    `
  }
}