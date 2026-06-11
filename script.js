for(let i=0;i<150;i++){

const star=document.createElement("div");

star.style.position="absolute";
star.style.width="3px";
star.style.height="3px";
star.style.borderRadius="50%";

star.style.background="white";

star.style.left=Math.random()*100+"%";
star.style.top=Math.random()*100+"%";

star.style.opacity=Math.random();

star.animate([
{
opacity:.2
},
{
opacity:1
},
{
opacity:.2
}
],
{
duration:1000+Math.random()*3000,
iterations:Infinity
});

document.body.appendChild(star);

}
const photos = [
    "foto/foto1.png",
    "foto/foto2.png",
    "foto/foto3.png",
    "foto/foto4.png",
    "foto/foto5.png",
    "foto/foto6.png"
];

for(let i = 0; i < 40; i++){

    const photo = document.createElement("img");

    photo.src =
        photos[Math.floor(Math.random() * photos.length)];

    photo.classList.add("photo-star");

    photo.style.left = Math.random() * 100 + "%";
    photo.style.top = Math.random() * 100 + "%";

    photo.style.animationDelay =
        Math.random() * 5 + "s";

    document.body.appendChild(photo);
}
window.addEventListener("load", () => {

    const music = document.getElementById("bgMusic");

    music.volume = 0.5;

    const playMusic = () => {
        music.play().catch(() => {});
    };

    playMusic();

    document.addEventListener("click", playMusic, {
        once: true
    });

});