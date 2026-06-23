document.getElementById('nav_bar').innerHTML =  `

<div class="nav">
    <div>
        <a href="index.html" class="my-button">Living Life</a>
    </div>

    <div>
        <a href="blog.html" class="my-button">Blog</a>
    </div>
    
    <div>
        <a href="www.peacefulLeaves.co.uk" class="my-button">Peaceful Leaves</a>
    </div>

    <div>
        <a href="https://www.facebook.com/profile.php?id=61576877245168" class="my-button">My Facebook Page</a>
    </div>
    
    <div>
        <a href="https://www.linkedin.com/in/jay-phoenix0/" class="my-button">My Linkedin</a>
    </div>

    <div>
        <a href="3dPrinting.html" class="my-button">3D Printing Projects</a>
    </div>

    <div>
        <a href="codingprojects.html" class="my-button">Coding Projects</a>
    </div>

    <div>
        <a href="cats.html" class="my-button">Cat Pictures!</a>
    </div>

    <div>
        <a href="Photography" class="my-button">My Photography</a>
    </div>

    <div>
        <a onclick="theme_switch()">Theme Switch</a>
    </div>
</div> `;





// fetch('navigation.html')
// .then(res => res.text())
// .then(text => {
//     let oldelem = document.querySelector("script#replace_with_navbar");
//     let newelem = document.createElement("div");
//     newelem.innerHTML = text;
//     oldelem.parentNode.replaceChild(newelem,oldelem);
// })
