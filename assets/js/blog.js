const blogContainer = document.getElementById("blog-container");


// Parses the JSON string array we created in form.js into usable
// for onto the blogArray object
let blogArray = JSON.parse(localStorage.getItem("blogArray"));
if (blogArray === null){
    blogArray = [];
}

// Runs a for loop to go through the blogArray we created in form.js
// The converted strings are added to a new div tag with h1, h2 and p tags
// created as child objects underneath using appendChild

for (let i = 0; i < blogArray.length; i++) {
    let blogPost = blogArray[i];
    console.log(blogPost);
    let blogDiv = document.createElement("div");
    blogDiv.innerHTML = `<h1>${blogPost.title}</h1><h2>${blogPost.username}</h2><p>${blogPost.content}</p>`;

    blogContainer.appendChild(blogDiv);
}