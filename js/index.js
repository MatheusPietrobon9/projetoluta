let log = new Log(document.querySelector('.log'));
let char = new Sorcerer('Ryu');
let monster = new BigMonster('Ken');

const gameStage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

gameStage.start();