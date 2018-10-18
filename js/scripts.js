$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    var sideOne = parseFloat($("#side1").val());
    var sideTwo = parseFloat($("#side2").val());
    var sideThree = parseFloat($("#side3").val());

    if(sideOne && sideTwo && sideThree && side1 > 0 && side2 > 0 && side3 > 0) {
      if (sideOne >= sideTwo + sideThree || sideTwo >= sideOne + sideThree || sideThree >= sideOne + sideTwo) {
        $("#not-a-triangle").show();
        $("#equilateral").hide();
        $("#isosceles").hide();
        $("#scalene").hide();
        $("#invalid").hide();
      } else if (sideOne === sideTwo && sideOne === sideThree) {
        $("#not-a-triangle").hide();
        $("#equilateral").show();
        $("#isosceles").hide();
        $("#scalene").hide();
        $("#invalid").hide();
      } else if (sideOne === sideTwo || sideOne === sideThree || sideTwo === sideThree){
        $("#not-a-triangle").hide();
        $("#equilateral").hide();
        $("#isosceles").show();
        $("#scalene").hide();
        $("#invalid").hide();
      } else {
        $("#not-a-triangle").hide();
        $("#equilateral").hide();
        $("#isosceles").hide();
        $("#scalene").show();
        $("#invalid").hide();
      }

    } else {
      $("#not-a-triangle").hide();
      $("#equilateral").hide();
      $("#isosceles").hide();
      $("#scalene").hide();
      $("#invalid").show();
    }
  });
});
