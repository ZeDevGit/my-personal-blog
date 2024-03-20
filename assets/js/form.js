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

    // Each piece of the blog for is set to separate lets
    // These will then be added to the newBlogPost object. 

    let username = usernameInput.value;
    let title = titleInput.value;
    let content = contentInput.value;

    console.log('Title:', title);
    console.log('Usermame:', username);
    console.log('Content:', content);

    let newBlogPost = {
        username: username,
        title: title,
        content: content,
    }
    
    // The newBlogPost object is pushed onto the blogArray for storage
    // To store correctly with Chrome's local storage the object is converted
    // into a JSON string using stringify

    blogArray.push(newBlogPost);
    localStorage.setItem('blogArray', JSON.stringify(blogArray));

    location.href = "blog.html"

    // Clear the form after submission
    document.getElementById('blogForm').reset();
});
