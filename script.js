$(document).ready(function() {

var quotes =[
 "Don't be ashamed just keep your head in the game,~ Anonymous",
 "I say, as a singer grows older, his conception grows a little deeper, because he lives life and he understands what he is trying to say a little more. And I think this gives. If a singer tries to find out what's happening in life, it gives him a better insight on telling the story of the song he is trying to sing.-Sam Cooke",
 "No matter how life gets, just keep moving and stay strong- Sam Cookes",
 "Float like a butterfly, sting like a bee. His hands can't hit what his eyes can't see. Now you see me, he won't.-Muhammad Ali",
 "Service to others is the rent you pay for your room here on earth.-Muhammad Ali",
 "I'm young; I'm handsome; I'm fast. I can't possibly be beat.-Muhammad Ali",
 "Dont count the days; make the days count.-Muhammad Ali",
 "If my mind can conceive it, and my heart can believe it-then I can achieve it. Jesse Jackson",
 "Be patient and understanding. Life is too short to be vengeful or malicious. -Phillips Brooks",
 "Pity the selfishness of lovers: it is brief, a forlorn hope; it is impossible. Elizabeth Bowen",
 "Eagles come in all shapes and sizes, but you will recognize them chiefly by their attitudes.-E. F. Schumacher",
 "Do not take life too seriously. You will never get out of it alive. -Elbert Hubbard",
 "I love deadlines. I like the whooshing sound they make as they fly by.-Douglas Adams",
 "I may be drunk, Miss, but in the morning I will be sober and you will still be ugly. Winston Churchill",
 "No man has a good enough memory to be a successful liar. Abraham Lincoln"
 ]
 
 var images= [
     "pics/background.jpg",
     "pics/galaxymovement.gif",
     "pics/Background1.jpg",
     "pics/Background2.jpg",
     "pics/Background3.jpg"
     ]
 
var random = Math.floor( Math.random() * quotes.length );
$("#quotetext").text(quotes[random]);

    $("#Quotes").click( function(){
        random = Math.floor( Math.random() * quotes.length );
        $("#quotetext").text(quotes[random]);
        random = Math.floor( Math.random() * images.length );
        $("body").css("background", "url(" +images[random] +")" );
    });
    
});



