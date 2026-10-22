
var wrapper_table_div = document.getElementById("wrapper-table");


setUpTable();

function setUpTable(){

    var term_table = "<table> <tr class=\"table-header\">" +
                     "<th>Category</th>"+
                     "<th>Term</th>"+
                     "<th>Description</th>"+ 
                     "</tr>";

    for(var x = 0; x < all_terms.length; x++){

        for(var y = 0; y < all_terms[x].array.length; y++){


            term_table += "<tr>" +
                          "<td>" + all_terms[x].display_name + "</td>"+
                          "<td>" + all_terms[x].array[y].term + "</td>"+
                          "<td>"+ getFullDescription(all_terms[x].array[y]) + "</td>" +
                          "</tr>";

        }

    }

    term_table += "</table>"

    wrapper_table_div.innerHTML = term_table;


}


function getFullDescription(json_obj){


    var full_description = "<p>"+ getScopeNote(json_obj) +"</p>";

        if(getExamples(json_obj)){
            full_description += "<p> <span class=\"table-description\">Examples</span>: " + getExamples(json_obj) + "</p>";
        }

        if(getTypeTerm(json_obj)){
            full_description += "<p> <span class=\"table-description\">Type</span>: " + getTypeTerm(json_obj) + "</p>";
        }

        if(getUseForTerms(json_obj)){
            full_description += "<p> <span class=\"table-description\">Use for</span>: " + getUseForTerms(json_obj) + "</p>";
        }

        if(getBroaderTerm(json_obj)){
            full_description += "<p> <span class=\"table-description\">Broader term</span>: " + getBroaderTerm(json_obj) + "</p>";
        }

        if(getNarrowerTerm(json_obj)){
            full_description += "<p> <span class=\"table-description\">Narrower term</span>: " + getNarrowerTerm(json_obj) + "</p>";
        }

    return full_description;
}
