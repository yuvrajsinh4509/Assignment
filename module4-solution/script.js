(function () {

    var names = ["Harry", "JJ", "Simon", "Ethan", "Vik", "Tobi", "Josh", "Klaus", "Elijah", "Niko"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
    })();
    
