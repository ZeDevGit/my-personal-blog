# my-personal-blog

## User Story

```md
AS A marketing student,
I WANT a personal blog
SO THAT I can showcase my thoughts and experiences.
```

## Description

This project is to create a page for submitting a user created blog post. 
The user submission is then transferred from one page to another.
Each page also has a button to change the theme from dark to light.

## Usage

```md
GIVEN a personal blog
WHEN I load the app,
THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.
WHEN I submit the form,
THEN blog post data is stored to localStorage.
WHEN the form submits,
THEN I am redirected to the posts page.
WHEN I enter try to submit a form without a username, title, or content,
THEN I am presented with a message that prompts me to complete the form.
WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
WHEN I click the light mode/dark mode toggle,
THEN the page content's styles update to reflect the selection.
WHEN I click the "Back" button,
THEN I am redirected back to the landing page where I can input more blog entries.
WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage.
WHEN I view localStorage,
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
WHEN I take a closer look at a single blog entry in the list,
THEN I can see the title, the content, and the author of the post.
WHEN I view the footer,
THEN I am presented with a link to the developer's portfolio.
```

## Features

- Landing page which features both an image and a user submission form
- User can create a blog post in the submission form on the right side. Information
will be passed to the blog page.
- User can change the theme using the Theme Switcher button on the top right.

## Mockup
![A user adds a blog through a form, then the post appears on the following page.](./assets/images/100-web-apis-challenge-demo.gif)


## Credits
- Edward Lawrence

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Project URL and Repository Link

- URL - https://zedevgit.github.io/my-personal-blog/
- Repo - https://github.com/ZeDevGit/my-personal-blog