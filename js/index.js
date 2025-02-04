let log = new Log(document.querySelector('.log'));
let char = new Sorcerer('Nokron');
let monster = new BigMonster();

const gameStage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

gameStage.start();