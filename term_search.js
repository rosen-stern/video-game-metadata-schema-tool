
var wrapper_table_div = document.getElementById("wrapper-table");
var term_search_input = document.getElementById("term-search-input");

setUpTable();
var term_table = document.getElementById("term-table");

stripeRows();

function setUpTable() {

    var term_table_returner = "<table id=\"term-table\"> <tr class=\"table-header\">" +
        "<th>Term</th>" +
        "<th>Description</th>" +
        "<th>Category</th>" +
        "</tr>";

    for (var x = 0; x < all_terms.length; x++) {

        for (var y = 0; y < all_terms[x].array.length; y++) {


            term_table_returner += "<tr>" +
                "<td class=\"term-display\">" + all_terms[x].array[y].term + "</td>" +
                "<td>" + getFullDescription(all_terms[x].array[y]) + "</td>" +
                "<td>" + all_terms[x].display_name + "</td>" +
                "</tr>";

        }

    }

    term_table_returner += "</table>"

    wrapper_table_div.innerHTML = term_table_returner;


}


function getFullDescription(json_obj) {


    var full_description = "<p>" + getScopeNote(json_obj) + "</p>";

    if (getExamples(json_obj)) {
        full_description += "<p> <span class=\"table-description\">Examples</span>: " + getExamples(json_obj) + "</p>";
    }

    if (getTypeTerm(json_obj)) {
        full_description += "<p> <span class=\"table-description\">Type</span>: " + getTypeTerm(json_obj) + "</p>";
    }

    if (getUseForTerms(json_obj)) {
        full_description += "<p> <span class=\"table-description\">Use for</span>: " + getUseForTerms(json_obj) + "</p>";
    }

    if (getBroaderTerm(json_obj)) {
        full_description += "<p> <span class=\"table-description\">Broader term</span>: " + getBroaderTerm(json_obj) + "</p>";
    }

    if (getNarrowerTerm(json_obj)) {
        full_description += "<p> <span class=\"table-description\">Narrower term</span>: " + getNarrowerTerm(json_obj) + "</p>";
    }

    return full_description;
}


function searchForTerm() {
    //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_table
    //https://stackoverflow.com/questions/73055073/how-do-i-search-all-the-columns-in-the-html-table-my-table-has-multiple-th-ro

    var input, filter, table, tr, i, txtValue;
    input = term_search_input;

    filter = input.value.toUpperCase();

    table = term_table;
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        var allTDs = tr[i].getElementsByTagName("td");

        for (index = 0; index < allTDs.length; index++) {
            txtValue = allTDs[index].textContent || allTDs[index].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].classList.remove("hidden-table-row");
                break;
            } else {
                tr[i].classList.add("hidden-table-row");
            }
        }
    }

    stripeRows();
}

//https://stackoverflow.com/questions/42267771/alternating-table-row-color-robust-to-displaynone-settings
function stripeRows() {
    // select all rows which are not hidden
    rows = term_table.querySelectorAll('tr:not(.hidden-table-row)');

    // add a class for every second such row
    for (var x = 0; x < rows.length; x++) {
        if (x % 2 == 0) { rows[x].classList.add('alt'); }
        else { rows[x].classList.remove('alt'); }
    }
}

function onListOfLinksClick(obj) {

    term_search_input.value = obj.innerHTML;
    term_search_input.dispatchEvent(new Event('change'));
    searchForTerm();
    window.scrollTo({ top: 0, behavior: 'smooth' });

}