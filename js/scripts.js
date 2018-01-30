
var subjects = [];
var petsArray = [];
var searchArray = [];
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// subjects= ["stuff", "junk", "whatnot"];

// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }
//
// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

function checkSelectors(subjects, newSubject) {
  console.log(newSubject);
  var inIt = false;
  for (var index = 0; index <= subjects.length; index++) {
    if ((newSubject === subjects[index]) || (newSubject === "")) {
      inIt = true;
      newSubject = "";
      console.log("true", inIt, newSubject);
    }
  };
  if (inIt === false) {
    subjects.push(newSubject);
    console.log("false", inIt, subjects, newSubject);
  }
  return subjects;
};

function fillSelector(subjects) {
  $("#selectorList").html("");
  subjects.forEach(function(subject) {
    $("#selectorList").append('<option value =' + subject + '>' + subject + '</option>');
  })
  return subjects;
}



function Pet(name, age, type, size, image, description, adopted) {

  this.name = name;
  this.age = age;
  this.type = type;
  this.size = size;
  // this.image = image;
  this.description = description;
  this.heart = false;
  this.adopted = adopted;
}

// function(petsArray, searchArray) {
//   if (this.type = true) {
//     var typeArray = petTypeSort(petsArray, searchArray);
//   } else if
//
// }

function petTypeSort(petsArray, typeArray) {
  var sortedArray = [];
  for (var i = 0; i < petsArray.length; i++) {
    for (var j = 0; j < typeArray.length; j++) {
      if (petsArray[i].type === typeArray[j]) {
        sortedArray.push(petsArray[i]);
      }
    }
  }
  return sortedArray;
}

function petSizeSort(petsArray, sizeArray) {
  var sortedArray = [];
  for (var i = 0; i < petsArray.length; i++) {
    for (var j = 0; j < sizeArray.length; j++) {
      if (petsArray[i].size === sizeArray[j]) {
        sortedArray.push(petsArray[i]);
      }
    }
  }
  return sortedArray;
}

function petHeartedSort(petsArray) {
  var sortedArray = [];
  for (var i = 0; i < petsArray.length; i++) {
    if (petsArray[i].heart === true) {
      sortedArray.push(petsArray[i]);
    }
    return sortedArray;
  }
}

function petAdoptedSort(petsArray) {
  var sortedArray = [];
  for (var i = 0; i < petsArray.length; i++) {
    if (petsArray[i].adopted === true) {
      sortedArray.push(petsArray[i]);
    }
    return sortedArray;
  }
}

function petNotAdoptedSort(petsArray) {
  var sortedArray = [];
  for (var i = 0; i < petsArray.length; i++) {
    if (petsArray[i].adopted === false) {
      sortedArray.push(petsArray[i]);
    }
    return sortedArray;
  }
}

function petArrayFilter(array1, array2) {
  var filteredArray = [];
  for (var i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      filteredArray.push(array1[i]);
    }
  }
  return filteredArray;
}


function displayAllPets(petsArray) {
  var avails = "";
  petsArray.forEach(function(pet) {
    console.log(pet.adopted);
    if (pet.adopted === false){
      avails = "Yes";
    }else if (pet.adopted === true){
      avails = "No";
    }
$("#petDiv").append('<div class="petRoller"><div class="col-md-8"><img class="petImage" src=' + pet.image +' alt="cute puppy"></div><div class="col-md-4"><h2 id="nameDisplay">'+pet.name+'</h2><ul class="aboutPet"><li>Age: ' +pet.age + '</li><li>Size:' +pet.size+'</li><li>Available: '+avails+'</li></ul><p id="descriptionDisplay">Description: '+pet.description+'</p></div></div>')


  Pet.prototype.showPet = function() {
  $("ul#list").append("<li>" + this.name + " the " + this.type + "</li>");
};



// this.name = name;
// this.age = age;
// this.type = type;
// this.size = size;
// this.image = image;
// this.description = description;
// this.heart = false;
// this.adopted = false;
var newPet = new Pet("Charlie", 0, "dog", "small", "http://on.natgeo.com/2DIRVbC", "The most adorable puppy on this Earth, I love him", true);
petsArray.push(newPet);

newPet = new Pet("Sassy", 4, "cat", "small", "http://bit.ly/2BBHggU", "A sweet gal who loves sitting in sunbeams", false);
petsArray.push(newPet);

newPet = new Pet("Coco", 18, "bird", "medium", "http://bit.ly/2BD5TtF", "A fiesty parrot; he loves to blow kisses and says hello when you come home", true);
petsArray.push(newPet);


$(function() {
  displayAllPets(petsArray)
  //
  // $("form#").submit(function(event) {
  //   event.preventDefault();
  //
  //   var name = $("").val();
  //   var age = $("").val();
  //   var type = $("").val();
  //   var size = $("").val();
  //   var image = $("").val();
  //   var description = $("").val();ß
  //
  //   newPet = new Pet(name, age, type, size, image, description);
  //   petsArray.push(newPet);
  //
  //
  //

  $("#addBttn").click(function() {
    var newSubject = $("#subjectAdded").val().toLowerCase();
    checkSelectors(subjects, newSubject);
    fillSelector(subjects);
  })
=======
$(document).ready(function() {
  var petsArray = [];
  var newPet = new Pet("Charlie", 0, "dog", "small", "The most adorable puppy on this Earth, I love him");
  petsArray.push(newPet);
  newPet.showPet();

  newPet = new Pet("Sassy", 4, "cat", "small", "A sweet gal who loves sitting in sunbeams");
  petsArray.push(newPet);
  newPet.showPet();

  newPet = new Pet("Coco", 18, "bird", "medium", "A fiesty parrot; he loves to blow kisses and says hello when you come home");
  petsArray.push(newPet);
  newPet.showPet();


  $("form#newPet").submit(function(event) {
    event.preventDefault();

    var name = $("input#newName").val();
    var age = $("input#newAge").val();
    var type = $("select#newType").val();
    var size = $("select#newSize").val();
    // var image = $("").val();
    var description = $("input#newDescription").val();

    newPet = new Pet(name, age, type, size, description);
    petsArray.push(newPet);
    newPet.showPet();

    console.log(newPet);
    console.log(petsArray);
    $("form#newPet").trigger("reset");


    // $("button").click(function() {
    // });
  });

  $("form#petSearch").submit(function(event) {
    event.preventDefault();

    var typeArray = [];
    var sizeArray = [];

    var searchName = $("input#name").val();
    // var searchAge =
    var searchType = $("input:checkbox[name=type]:checked").each(function() {
      var typeChecked = $(this).val();
      typeArray.push(typeChecked);
    });
    var searchSize = $("input:checkbox[name=size]:checked").each(function() {
      var sizeChecked = $(this).val();
      sizeArray.push(sizeChecked);
    });

    console.log(typeArray);
    console.log(sizeArray);
    var typeSortedArray = petTypeSort(petsArray, typeArray);
    var sizeSortedArray = petSizeSort(petsArray, sizeArray);
    var typeAndSizeArray = petArrayFilter(typeSortedArray, sizeSortedArray);
    console.log(typeAndSizeArray);

    $("form#petSearch").trigger("reset");

  });
