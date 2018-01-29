/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// subjects= ["stuff", "junk", "whatnot"];

var subjects = [];


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function checkSelectors(subjects, newSubject) {
  console.log(newSubject);
  var inIt = false;
  for (var index = 0; index <= subjects.length; index++) {
    if ((newSubject === subjects[index]) || (newSubject === "")){
      inIt = true;
      newSubject = "";
      console.log("true", inIt, newSubject);
      // return subjects;
    }
  };
    if (inIt === false) {
      subjects.push(newSubject);
      console.log("false", inIt, subjects, newSubject);
    }
    return subjects;
};

function fillSelector(subjects){
  $("#selectorList").html("");
  subjects.forEach(function(subject){

    $("#selectorList").append('<option value =' + subject + '>' + subject + '</option>');
})
return subjects;
}


$(function() {

  $("#addBttn").click(function() {
    var newSubject = $("#subjectAdded").val().toLowerCase();
    checkSelectors(subjects, newSubject);
    fillSelector(subjects);
  })

});
