// home.js

// Function to retrieve blog posts from local storage
function getBlogPosts() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    return blogPosts;
}

// Function to dynamically create blog cards
function createBlogCards() {
    const blogsSection = document.querySelector('.blogs-section');
    const blogPosts = getBlogPosts();

    blogPosts.forEach((blog, index) => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');

        const blogImage = document.createElement('img');
        blogImage.src = blog.image;
        blogImage.classList.add('blog-image');
        blogCard.appendChild(blogImage);

        const blogTitle = document.createElement('h1');
        blogTitle.textContent = blog.title;
        blogTitle.classList.add('blog-title');
        blogCard.appendChild(blogTitle);

        const blogOverview = document.createElement('p');
        blogOverview.textContent = blog.overview;
        blogOverview.classList.add('blog-overview');
        blogCard.appendChild(blogOverview);

        const readButton = document.createElement('a');
        readButton.href = `blog.html?id=${index}`; // Linking to blog.html with the blog ID as query parameter
        readButton.textContent = 'read';
        readButton.classList.add('btn', 'dark');
        blogCard.appendChild(readButton);

        blogsSection.appendChild(blogCard);
    });
}

// Function to initialize the home page
function initializeHomePage() {
    createBlogCards();
}

// Initialize the home page
initializeHomePage();
