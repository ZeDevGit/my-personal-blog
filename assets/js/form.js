const usernameInput = document.getElementById('username').value;
const titleInput = document.getElementById('title').value;
const contentInput = document.getElementById('content').value;

document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values entered by the user
    let userBlogPosts = [];

    let username = usernameInput.value;
    let title = titleInput.value;
    let content = contentInput.value;

    // You can process the data further here, e.g., save it to a JSON object or display it on the page
    console.log('Usermame:', title);
    console.log('Title:', content);
    console.log('Content:', content);

    let newBlogPost = {
        username: username,
        title: title,
        content: content,
    }
    
    userBlogPosts.push(newBlogPost);
    localStorage.setItem('blogArray', JSON.stringify(userBlogPosts));

    location.href = "blog.html"

    // Clear the form after submission
    document.getElementById('blogForm').reset();
});
