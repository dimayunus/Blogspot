// blog.js

// Function to retrieve blog posts from local storage
function getBlogPosts() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    return blogPosts;
}

// Function to get the blog ID from the query parameter
function getBlogId() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const blogId = urlParams.get('id');
    return blogId;
}

// Function to display the blog content on the page
function displayBlogContent() {
    const blogSection = document.querySelector('.blog-section');
    const blogPosts = getBlogPosts();
    const blogId = getBlogId();

    if (blogId !== null && blogId < blogPosts.length) {
        const blog = blogPosts[blogId];

        const blogContent = document.createElement('div');
        blogContent.classList.add('blog-content');

        const blogImage = document.createElement('img');
        blogImage.src = blog.image;
        blogImage.classList.add('blog-image');
        blogContent.appendChild(blogImage);

        const blogTitle = document.createElement('h1');
        blogTitle.textContent = blog.title;
        blogTitle.classList.add('blog-title');
        blogContent.appendChild(blogTitle);

        const blogContentText = document.createElement('div');
        blogContentText.innerHTML = blog.content;
        blogContentText.classList.add('blog-content-text');
        blogContent.appendChild(blogContentText);

        blogSection.appendChild(blogContent);
    }
}

// Function to initialize the blog page
function initializeBlogPage() {
    displayBlogContent();
}

// Initialize the blog page
initializeBlogPage();
