// JavaScript code for editor page
// Use localStorage to save and publish blog posts

const titleInput = document.querySelector('.title');
const articleInput = document.querySelector('.article');
const publishBtn = document.querySelector('.publish-btn');
const imageUpload = document.getElementById('image-upload');

publishBtn.addEventListener('click', () => {
    const title = titleInput.value;
    const article = articleInput.value;
    
    // Save the blog post to localStorage
    const blogPost = {
        title: title,
        article: article,
        image: localStorage.getItem('uploadedImage') || ''
    };

    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    // Clear the input fields
    titleInput.value = '';
    articleInput.value = '';
    localStorage.removeItem('uploadedImage');

    alert('Blog post published successfully!');
    window.location.href = 'home.html'; // Redirect to the home page
});

imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const uploadedImage = e.target.result;
            localStorage.setItem('uploadedImage', uploadedImage);
            alert('Image uploaded successfully!');
        };
        reader.readAsDataURL(file);
    }
});
