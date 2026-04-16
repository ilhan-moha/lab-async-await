/* const postList = document.getElementById('post-list');

function displayPosts(posts){
    posts.forEach(post => {
     const li = document.createElement('li');
     const h1 = document.createElement('h1');
     const p = document.createElement('p');

        h1.textContent = post.title;
        p.textContent = post.body;

     li.appendChild(h1);
     li.appendChild(p);
     
     postList.appendChild(li);
    });
}


async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  displayPosts(posts);
}

getPosts();

 */

// Function to Display Posts
function displayPosts(posts) {
  const postList = document.getElementById('post-list');
  
  // Clear existing content to prevent duplicates if the test runs twice
  postList.innerHTML = '';

  posts.forEach(post => {
    // Create elements
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    // Add content
    h1.textContent = post.title;
    p.textContent = post.body;

    // Append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);

    // Append li to the ul
    postList.appendChild(li);
  });
}

// Async function to house fetch
async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    // Call displayPosts function after fetch
    displayPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Ensure the DOM is loaded before running the script
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', getPosts);
} else {
  getPosts();
}