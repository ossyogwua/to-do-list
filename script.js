function newItem(){


    // Adding a new item : 
       let li = $("<li></li>");
       let inputValue = $("#input").val();
       li.append(inputValue);
    
       if (inputValue === '') {
         alert("You must write something!");
       } else {
         $('#list').append(li);
       }

    // Crossing out an item :
     
       function crossOut() {
             li.toggleClass("strike");
         }
    
         li.on("doubleclick", function crossOut() {li.toggleClass("strike")});
    
    
      let crossOutButton = $('<crossOutButton></crossOutButton>');
      crossOutButton.append(document.createTextNode('X'));
      li.append(crossOutButton);
     // Adding CLASS DELETE :
     crossOutButton.on("click", deleteListItem);
     function deleteListItem(){
           li.addClass("delete")
       }

       //Reodering the list :
    
      
       $('#list').sortable();
    
    }
    