

var deck1 = []
var deck2 = []

var spades = [['6_of_spades', 6], ['7_of_spades', 7], ['8_of_spades', 8], ['9_of_spades', 9], ['10_of_spades', 10], ['jack_of_spades2', 11], ['queen_of_spades2', 12], ['king_of_spades2', 13], ['ace_of_spades', 14]];
var hearts = [['6_of_hearts', 6], ['7_of_hearts', 7], ['8_of_hearts', 8], ['9_of_hearts', 9], ['10_of_hearts', 10], ['jack_of_hearts2', 11], ['queen_of_hearts2', 12], ['king_of_hearts2', 13], ['ace_of_hearts', 14]];
var clubs = [['6_of_clubs', 6], ['7_of_clubs', 7], ['8_of_clubs', 8], ['9_of_clubs', 9], ['10_of_clubs', 10], ['jack_of_clubs2', 11], ['queen_of_clubs2', 12], ['king_of_clubs2', 13], ['ace_of_clubs', 14]];
var diamonds = [['6_of_diamonds', 6], ['7_of_diamonds', 7], ['8_of_diamonds', 8], ['9_of_diamonds', 9], ['10_of_diamonds', 10], ['jack_of_diamonds2', 11], ['queen_of_diamonds2', 12], ['king_of_diamonds2', 13], ['ace_of_diamonds', 14]];
var card1 = [];
var card2 = [];



var all = [];

for (var words = 0; words < 9; words++){
    all.push(`<img class="spades${spades[words][1]} crd" src="cards/${spades[words][0]}.png">`);
    all.push(`<img class="hearts${hearts[words][1]} crd" src="cards/${hearts[words][0]}.png">`);
    all.push(`<img class="diamonds${diamonds[words][1]} crd" src="cards/${diamonds[words][0]}.png">`);
    all.push(`<img class="clubs${clubs[words][1]} crd" src="cards/${clubs[words][0]}.png">`);


}
var ralist = [];
var ralist2 = [];
var alleft = ralist + ralist2;

function ranndss(rs, bass=[]){
    var ran = Math.floor(Math.random()*35);
    if (rs.includes(ran) || bass.includes(ran)){
        ranndss(rs, bass);
    }else{
        rs.push(ran)
    }
}
[0,0,0,0,0,0,0].forEach(() => ranndss(ralist));
[0,0,0,0,0,0,0].forEach(() => ranndss(ralist2, ralist));


for (var i = 0; i < 7; i++){
    
    
    card1.push(all[ralist[i]]);
    
}
document.querySelector('.cards1').innerHTML = `${card1}`;


for (var i = 0; i < 7; i++){
    
    
    card2.push(all[ralist2[i]]);
    
}
document.querySelector('.cards2').innerHTML = `${card2}`;
var allwent = ralist.concat(ralist2);


void function(){
    var plyrs = [0, 1];
    var curr = 0;
    var ort = [];

    

    for (var i = 0; i < all.length; i++){
        if(allwent.includes(all[i])){
            all.splice(i, 1)

    }

    }
document.querySelector('.middle').innerHTML = `${all.join(' ')}`;
var allss = document.querySelector('.middle').childNodes.forEach(async (x, m) => { var f = await x; if(f.style){f.style.zIndex = `${m}`;f.style.right = "55px"; f.style.top = '180px';f.style.position = 'absolute'} })
    
    var xc = 0;

    
    $( ".crd" ).draggable({
  start: function(event) {
             var m = $(event.target).attr('class');
        var f = (m.split(' '));
        console.log(f[0]);
        xc = xc + 1; $(`.${f[0]}`).css("z-index",`${xc}`);

  },
  drag: function() {

  },
  stop: function() {

  }
});
    
    

    $(document).ready(function() {
    $(".crd").on('click', function(event) {
       var m = $(event.target).attr('class');
        var f = (m.split(' '));
        console.log(f[0]);
        xc = xc + 1; $(`.${f[0]}`).css("z-index",`${xc}`);
    });
});
    
    
    document.querySelector('.cards1').childNodes.forEach((x) => x.addEventListener('click', () => console.log(x.parentNode)))
    
}();

