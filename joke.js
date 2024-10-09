fetch('https://icanhazdadjoke.com/slack')
.then(data=>data.json())
.then(jokeData=>{
    const joketext=jokeData.attachments[0].text;
    const ele=document.getElementById('eleid');   
    ele.innerHTML=joketext;

})