let char = new Knight('Gordof');
let monster = new LittleMonster();

const gameStage = new stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)

gameStage.start();