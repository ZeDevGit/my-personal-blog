

function createNewBlogPost(){
    if (localStorage.getItem(blogArray)) {
        if(localStorage.getItem("blogArray")){
            // Get the JSON string from localStorage and parse it into a JavaScript object
            let blogPostArray = JSON.parse(localStorage.getItem("blogArray"));
        
            // Assuming there's only one blog post in the array
            let blogPostObject = blogPostArray[0];
        
            // Populate the elements with retrieved data
            username.textContent = "Created By: " + blogPostObject.username;
            title.textContent = blogPostObject.title;
            content.textContent =blogPostObject.content;
          }
    }
}