let char = new Knight('Willian');
//let char2 = new Sorcerer('Arthur');
let monster = new LittleMonster();
//let bigmonster = new BigMonster();

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);

stage.start();