const game = document.getElementById("game");
const player = document.getElementById("player");
const scoreText = document.getElementById("score");

let playerX = 180;
let score = 0;

document.addEventListener("keydown", movePlayer);

function movePlayer(e){

    if(e.key==="ArrowLeft" && playerX>0){
        playerX -= 20;
    }

    if(e.key==="ArrowRight" && playerX<360){
        playerX +=20;
    }

    player.style.left = playerX+"px";
}

function createEnemy(){

    const enemy = document.createElement("div");
    enemy.classList.add("enemy");
    enemy.innerHTML="☄️";

    let enemyX = Math.random()*360;

    enemy.style.left = enemyX+"px";

    game.appendChild(enemy);

    let enemyY=-40;

    const fall=setInterval(()=>{

        enemyY +=5;

        enemy.style.top = enemyY+"px";

        // Collision Detection

        if(
            enemyY>520 &&
            enemyX<playerX+30 &&
            enemyX+30>playerX
        ){
            alert("💥 Game Over!\nScore: "+score);
            location.reload();
        }

        if(enemyY>600){

            clearInterval(fall);

            enemy.remove();

            score++;

            scoreText.innerHTML="Score: "+score;

        }

    },30);

}

setInterval(createEnemy,1000);