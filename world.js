function design() {
    platforms = new Group();
    boden = new platforms.Sprite(500,1100,500, 800, 's' );
    boden.color = "#0d380d";
    menu = new Sprite(windowWidth-70,120,50,50,'n');
}
function level1() {
    level1s = new Group();
    new level1s.Sprite(600,500,100,20, 's');
    new level1s.Sprite(700,300,30,200, 's');
    new level1s.Sprite(550,400,30,30, 's');
    new level1s.Sprite(1000,200,300,300, 's');
    new level1s.Sprite(1000,-100,300,20, 's');
    new level1s.Sprite(1300,-120,60,450, 's');
    new level1s.Sprite(1380,0,100,20, 's');
}