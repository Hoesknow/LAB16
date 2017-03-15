var app = angular.module('talksAlot',[]);
app.controller('talksCtrl', function($scope){
  $scope.wordList = [];
  var words = ["yahh",  "ughh",  "whoo",  "yeet",  "dab", "hyphy",  "jugg",  "bubblicious",  "website",  "app"];
  var deco  =['style1', 'style2', 'style3', 'style4', 'style5'];
  var moreWords =[ 'We rock Im a rockstar Try to cuff me like a cop car Try to play me like a popstar Thats how you get not far' ,
'La la la la Wait til I get my money right'
, ' Is it real son, is it really real son Let me know its real son, if its really real'
,'Tell me how you really feel, tell me how you really feel'
,'Top floor the view alone will leave you breathless *gasps*  Try to catch it, its kinda hard Getting choked by detectives, yeah, yeah, now check the method'
,'You wore a pink diamond chicken wing chain (Are you dumb?)'
,'Take a little trip, hater pack up yo mind Look forward not behind, then youll see what you find","The story of life is quicker than the wink of an eye, the story of love is hello and goodbye. until we meet again'
,'website website website website.... droptop'
 ,'who let the dogs out?'];
var moreDeco  =['style6', 'style7', 'style8', 'style9', 'style10'];



 $scope.addWord=function() {
   var item={};
   item.word=words[Math.floor(Math.random() * words.length)];
   $scope.wordList.push(item);
   };

   $scope.addMoreWords=function() {
     var item={};
     item.word=moreWords[Math.floor(Math.random() * moreWords.length)];
     $scope.wordList.push(item);
     };
     $scope.addDecorativeWord=function() {
       var item={};
       item.word=words[Math.floor(Math.random() * words.length)];
       item.decoration=deco[Math.floor(Math.random() * deco.length)];
       $scope.wordList.push(item);
     };

     $scope.addMoreDecoration=function() {
       var item={};
       item.word=moreWords[Math.floor(Math.random() * moreWords.length)];
       item.decoration=moreDeco[Math.floor(Math.random() * moreDeco.length)];
       $scope.wordList.push(item);
     };




});
