function rd(){
  return (5 + Math.floor(Math.random()*29)).toString();
}
setInterval(function(){
  $('#sl').attr('src', 'images/'+rd()+'.png');
},230)