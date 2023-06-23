burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navlist = document.querySelector(".navlist");

burger.addEventListener("click", () => {
	navlist.classList.toggle("visi-resp");
	navbar.classList.toggle("hnav-resp");
});

/* <footer>
    <div class="container">
      <ul class="footer-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="social-icons">
        <a href="#"><img src="facebook.png" alt="Facebook"></a>
        <a href="#"><img src="twitter.png" alt="Twitter"></a>
        <a href="#"><img src="instagram.png" alt="Instagram"></a>
      </div>
    </div>
  </footer> */
