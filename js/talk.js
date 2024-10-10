new TypeIt("#linzewu", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("ChenJieLin")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("感谢有你")
    .pause(3000)
    .go();

new TypeIt('#talkToLinLin', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();