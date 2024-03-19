const usernameInput = document.getElementById('author');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values entered by the user
    let blogArray = JSON.parse(localStorage.getItem("blogArray"));
        if (blogArray === null){
        blogArray = [];
    }

    let username = usernameInput.value;
    let title = titleInput.value;
    let content = contentInput.value;

    // You can process the data further here, e.g., save it to a JSON object or display it on the page
    console.log('Title:', title);
    console.log('Usermame:', username);
    console.log('Content:', content);

    let newBlogPost = {
        username: username,
        title: title,
        content: content,
    }
    
    blogArray.push(newBlogPost);
    localStorage.setItem('blogArray', JSON.stringify(blogArray));

    location.href = "blog.html"

    // Clear the form after submission
    document.getElementById('blogForm').reset();
});
