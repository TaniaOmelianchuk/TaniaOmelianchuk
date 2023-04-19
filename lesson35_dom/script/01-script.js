var playList = [
{ author: "LED ZEPPELIN", song:"STAIRWAY TO HEAVEN"},

{author: "QUEEN", song:"BOHEMIAN RHAPSODY"},

{author: "LYNYRD SKYNYRD", song:"FREE BIRD"},

{author: "DEEP PURPLE", song:"SMOKE ON THE WATER"},

{author: "JIMI HENDRIX", song:"ALL ALONG THE WATCHTOWER"},

{author: "AC/DC", song:"BACK IN BLACK"},

{author: "QUEEN", song:"WE WILL ROCK YOU"},

{author: "METALLICA", song:"ENTER SANDMAN"}
];

const playlistItems = document.getElementById("playlist");

playList.forEach((playList) => {
    const li = document.createElement('li');
    li.innerHTML = `${playList.author}, ${playList.song}`;
    playlistItems.appendChild(li);
})
