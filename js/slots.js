

$(document).ready(function() {

const imageArray = ['images/cherry.png','images/grapes.png','images/heart.png','images/lemon.png','images/orange.png','images/seven.png','images/strawberry.png']


let myRange = imageArray.length; let balance = 50; bet = 1;
let index = 0; let slot0 = 0; let slot1 = 0; let slot2 = 0; let n = 0; let m = 0;


    $('button:eq(0)').click(function(){
        if(bet > 0){bet = bet - 1;
        $('#bet').text("$"+bet);}

    });
        $('button:eq(1)').click(function(){
        if(bet < balance){
        bet = bet +1;
        $('#bet').text("$"+bet);}
        else{$('#topText').css('color','red');
        $('#topText').fadeIn(100, 0.1).fadeTo(200, 1.0)
        $('#topText').fadeTo(100, 0.1).fadeTo(200, 1.0)
        $('#topText').fadeTo(100, 0.1).fadeTo(200, 1.0)
        $('#topText').text("Invalid bet amount. you do not have enough to bet $" +bet+".");}

        });




    $('spin').click(function(){

    var imageInterval0 = setInterval(function () {
        n = Math.floor( myRange * Math.random())
        if(slot0 == slot1 && slot1 == slot2 && balance > 0){n = index}
        $('img:eq(0)').attr('src', imageArray[n]);
        }, 100);

    index = Math.floor( myRange * Math.random());
    if(balance == 0 ){index = 0};
    $('img:eq(0)').attr('src', imageArray[(index) % (imageArray.length)]);
    slot0 = index;

    var imageInterval1 = setInterval(function () {
        n = Math.floor( myRange * Math.random())
        if(slot0 == slot1 && slot1 == slot2 && balance > 0){n = index}
        $('img:eq(1)').attr('src', imageArray[n]);
        }, 100);

    index = Math.floor( myRange * Math.random());
    if(balance == 0 ){index = 1};
    $('img:eq(1)').attr('src', imageArray[(index) % (imageArray.length)]);
    slot1 = index;

    var imageInterval2 = setInterval(function () {
        n = Math.floor( myRange * Math.random())
        if(slot0 == slot1 && slot1 == slot2 && balance > 0){n = index}
        $('img:eq(2)').attr('src', imageArray[n]);

        }, 100);

    index = Math.floor( myRange * Math.random());
    if(balance == 0 ){index = 3};
    $('img:eq(2)').attr('src', imageArray[(index) % (imageArray.length)]);
    slot2 = index;

        if(slot0 == slot1 && slot1 == slot2 && balance > 0){
        $('#topText').fadeIn(100, 0.1).fadeTo(200, 1.0)
        $('#topText').fadeTo(100, 0.1).fadeTo(200, 1.0)
        $('#topText').fadeTo(100, 0.1).fadeTo(200, 1.0)
        $('#topText').css('color','red');
        $('#topText').text("Congratulations! You won!");
        balance = balance + (bet * 15);
        $('#balance').text("$"+balance);
         setTimeout(function (){
        clearInterval(imageInterval0);
        }, 500);

        setTimeout(function (){
        clearInterval(imageInterval1);
        }, 1000);

        setTimeout(function (){
        clearInterval(imageInterval2);
        }, 1500);
        }
        else{
        if(balance > 0){
        $('#topText').fadeIn();
        $('#topText').css('color','red');
        $('#topText').text("You lost, spin again!");
        balance = balance - bet;
        $('#balance').text("$"+balance);

        setTimeout(function (){
        clearInterval(imageInterval0);
        }, 500);

        setTimeout(function (){
        clearInterval(imageInterval1);
        }, 1000);

        setTimeout(function (){
        clearInterval(imageInterval2);
        }, 1500);

        }
        if(balance <= 0){
        $('#topText').fadeIn(100, 0.1).fadeTo(200, 1.0)
        $('#topText').fadeTo(100, 0.1).fadeTo(200, 1.0)
        $('#topText').fadeTo(100, 0.1).fadeTo(200, 1.0)
        $('#topText').css('color','red');
        $('#topText').text("You lost all your money!");
        balance = 0;
        setTimeout(function (){
        clearInterval(imageInterval0);
        }, 0);

        setTimeout(function (){
        clearInterval(imageInterval1);
        }, 0);

        setTimeout(function (){
        clearInterval(imageInterval2);
        }, 0);
        }
}
$('#balance').text("$"+balance);
$('#bet').text("$"+bet);
    });




});

