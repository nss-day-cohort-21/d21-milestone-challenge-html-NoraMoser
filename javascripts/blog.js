let blog = [
	{
		name: "Post 1",
		description: "The first week of school has been pretty intense.  We have learned about HTML, CSS, and basic Javascript."
	},
	{
		name: "Post 2",
		description: "The second week of school has been pretty intense.  We have learned about ___."
	}
];




let parentContainer = document.querySelector('.myBlog');
let info = "";

blog.forEach(function (item) {
	info += `
	<section>
		<article class="myBlog">
			<h3>My Blog Posts</h3>
			<h4 class="myBlogTitle">${item.name}</h4>
			<p class="myBlogContent">${item.description}</p>
			<footer>By: Nora Moser</footer>
		</article>
	</section>
	`;
});

parentContainer.innerHTML = info;