window.addEventListener("scroll",heroScroll);const bg=document.querySelector(".bg-container"),trees=document.querySelector(".trees-container"),plot=document.querySelector(".plot-container"),intro=document.querySelector(".intro-container"),overlayHero=document.querySelector(".overlay-hero"),story=document.querySelector(".intro-text");function heroScroll(e){let o=window.scrollY;console.log(o),o<10?(plot.style.marginTop="20rem",bg.style.backgroundSize="100%",intro.style.opacity="1",overlayHero.style.opacity="0.2",trees.style.backgroundSize="100%",bg.style.backgroundPosition="50% 65%"):o>10&&o<600?o>10&&o<50?(bg.style.backgroundSize="105%",trees.style.backgroundSize="105%",intro.style.opacity="0.99",plot.style.marginTop="20rem",overlayHero.style.opacity="0.25",bg.style.backgroundPosition="50% 66%"):o>50&&o<100?(bg.style.backgroundSize="110%",trees.style.backgroundSize="110%",intro.style.opacity="0.95",plot.style.marginTop="15rem",overlayHero.style.opacity="0.3",bg.style.backgroundPosition="50% 68%"):o>100&&o<150?(bg.style.backgroundSize="115%",trees.style.backgroundSize="115%",plot.style.marginTop="17.5rem",intro.style.opacity="0.9",overlayHero.style.opacity="0.4",bg.style.backgroundPosition="50% 71%"):o>150&&o<200?(bg.style.backgroundSize="120%",trees.style.backgroundSize="120%",intro.style.opacity="0.8",plot.style.marginTop="15rem",overlayHero.style.opacity="0.55",bg.style.backgroundPosition="50% 74%"):o>200&&o<250?(bg.style.backgroundSize="125%",trees.style.backgroundSize="125%",intro.style.opacity="0.68",plot.style.marginTop="10rem",overlayHero.style.opacity="0.6",bg.style.backgroundPosition="50% 78%"):o>250&&o<300?(bg.style.backgroundSize="130%",trees.style.backgroundSize="130%",plot.style.marginTop="0rem",overlayHero.style.opacity="0.7",intro.style.opacity="0.55",bg.style.backgroundPosition="50% 75%"):o>300&&o<350?(bg.style.backgroundSize="135%",trees.style.backgroundSize="135%",plot.style.marginTop="-7.5rem",overlayHero.style.opacity="0.8",intro.style.opacity="0.4",bg.style.backgroundPosition="50% 90%"):o>350&&o<400?(bg.style.backgroundSize="142%",trees.style.backgroundSize="142%",plot.style.marginTop="-8.5rem",overlayHero.style.opacity="0.9",intro.style.opacity="0.15",bg.style.backgroundPosition="50% 90%"):o>400&&o<450?(bg.style.backgroundSize="150%",trees.style.backgroundSize="150%",plot.style.marginTop="-9rem",overlayHero.style.opacity="0.97",intro.style.opacity="0",bg.style.backgroundPosition="50% 90%"):o>450&&o<500?(bg.style.backgroundSize="165%",trees.style.backgroundSize="165%",plot.style.marginTop="-9.5rem",overlayHero.style.opacity="1",intro.style.opacity="0",bg.style.backgroundPosition="50% 90%"):o>500&&o<600&&(bg.style.backgroundSize="180%",trees.style.backgroundSize="180%",plot.style.marginTop="-10rem",overlayHero.style.opacity="1",bg.style.backgroundPosition="50% 90%"):o>600&&(bg.style.backgroundSize="200%",trees.style.backgroundSize="200%",plot.style.marginTop="-10rem",overlayHero.style.opacity="1",intro.style.opacity="0",bg.style.backgroundPosition="50% 90%",console.log(o))}const imgSelect=document.querySelectorAll(".birth-img"),overlay=document.querySelector(".overlay"),overlayImage=overlay.querySelector("img"),overlayClose=overlay.querySelector(".close"),h1=overlay.querySelector("h1"),h2=overlay.querySelector("h2");function handleClick(e){console.log(e.currentTarget.querySelector(".img").querySelector(".img-responsive").src,"data");let o=e.target.dataset.id;console.log(o),overlayImage.src=e.currentTarget.querySelector(".img").querySelector(".img-responsive").src,console.log(overlayImage.src),overlay.classList.add("open")}function handleClose(e){overlay.classList.remove("open")}imgSelect.forEach((e,o)=>{e.setAttribute("data-id",o),e.addEventListener("click",handleClick)}),overlayClose.addEventListener("click",handleClose);