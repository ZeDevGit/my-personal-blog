const blogContainer = document.getElementById("blog-container");

let blogArray = JSON.parse(localStorage.getItem("blogArray"));
if (blogArray === null){
    blogArray = [];
}

function createNewBlogPost() {
    if (localStorage.getItem(blogArray)) {
        if (localStorage.getItem("blogArray")) {

        }
    }
}


for (let i = 0; i < blogArray.length; i++) {
    let blogPost = blogArray[i];
    console.log(blogPost);
    let blogDiv = document.createElement("div");
    blogDiv.innerHTML = `<h1>${blogPost.title}</h1><h2>${blogPost.username}</h2><p>${blogPost.content}</p>`;

    blogContainer.appendChild(blogDiv);
}