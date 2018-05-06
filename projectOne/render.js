/* Notes to the reviewer. All objectives were completed. Personal note about the bonus objective: I created it 
in such a way that you have to embed it through the ID. This was a personal decision for two reasons: 1) a 
page with a lot of content will increase user error with selecting the precise element in which they want to embed the
table (would require element name and nth-child). 2) The client would spend less time selecting from pre-defined areas
with ID related fields. */

// Static database object. Embedded in back-end so it's safer from user manipulation.
var table_data = [ { first_name : 'Rose',
                     last_name  : 'Tyler',
                     home       : 'Earth' },
                   { first_name : 'Zoe',
                     last_name  : 'Heriot',
                     home       : 'Space Station W3'},
                   { first_name : 'Jo',
                     last_name  : 'Grant',
                     home       : 'Earth'},
                   { first_name : 'Leela',
                     last_name  : null,
                     home       : 'Unspecified'},
                   { first_name : 'Romana',
                     last_name  : null,
                     home       : 'Gallifrey'},
                   { first_name : 'Clara',
                     last_name  : 'Oswald',
                     home       : 'Earth'},
                   { first_name : 'Adric',
                     last_name  : null,
                     home       : 'Alzarius'},
                   { first_name : 'Susan',
                     last_name  : 'Foreman',
                     home       : 'Gallifrey'} ];

// keys for dynamically created table head
let keys = ["First name", "Last name", "Home"];
//bonus: allows the table to be inserted into div elements into the page (since typically elements are wrapped I chose to make it work with divs)
let insertPoint = prompt("Please select where you would like to insert the data (div id = ?) (1-4)", "1");

function populate(){
    //bonus: variable
    let insertionPoint = document.getElementsByTagName("div")[parseInt(insertPoint) - 1];
    // edge case
    if (!insertPoint){
        alert("No insertion point has been defined (Deleted)")
    }
    else {
      //creation of the table
      let table = document.createElement("TABLE");
      table.classList.add("table", "table-hover", "table-bordered");
      let thead = document.createElement("THEAD");
      let trhead = document.createElement("TR");
      trhead.classList.add("info")
      //populating the head 
      for (var ind = 0; ind < keys.length; ind++){
        let tdhead = document.createElement("TD"); 
        tdhead.appendChild(document.createTextNode(keys[ind]));
        trhead.appendChild(tdhead);
      };
      thead.appendChild(trhead);
      table.appendChild(thead); 
      insertionPoint.appendChild(table);
      
      // populating the table body
      table_data.forEach( val => {
        let tb = document.createElement("TBODY");
        let tr = document.createElement("TR"); 
        for (let index in val){
            let td = document.createElement("TD");
            if (val[index] === null || val[index] === "Unspecified") {
              td.appendChild(document.createTextNode("N/A"));
            } else {
              td.appendChild(document.createTextNode(val[index]));
            }
            tr.appendChild(td);
            tb.appendChild(tr);
        }
        table.appendChild(tb);
      })
    }
}
