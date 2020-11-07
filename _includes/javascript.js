//const { get } = require("jquery");

$.ajax({
    url: 'https://gist.githubusercontent.com/eallenOP/b40fa9bba517ff258da395c79edd2477/raw/a8175e0b5c915d9e2d857a2f114704094ade22b9/attendance.json',
    dataType: 'json',
    success: function(data) {
    console.log(data);
    var pc1 = 0, pc2 = 1, pc3 = 2, pc4 = 3;
    var tdstream = "<td class='streamopt'></td>"
    //var stream = "<td><select id='streamopt' onchange='streamcheck()'><option value=''>N/A</option><option value='a'>A</option><option value='b'>B</option></select></td>"
    var attendance = "<td><select><option value=''>N/A</option><option value='p'>P</option><option value='e'>E</option><option value='a'>A</option></select></td>";
    for (var i = 0; i < data.length; i++) {
        if((data[i].class == 'IN790') || (data[i].isActive == 'true')){           
                $("#sturole").append("<tr><td>" + data[i].name.first + " " + data[i].name.last + tdstream + attendance + 
                "<td>" + data[i].attendance[pc1] +"</td><td>"+ data[i].attendance[pc2] +"</td><td>"+ data[i].attendance[pc3] +
                "</td><td>"+ data[i].attendance[pc4] +  "</td></tr>");
                console.log(i)
        };
        
    };
     }
});



function streamcheck(){
    var rowCount = $('#roletable >tbody >tr').length;
    console.log("Row:", rowCount);
    if (document.getElementById("streamsel").value == 'a'){
        for (var c = 0; c < rowCount; c++) {
            $('.streamopt').replaceWith("<td class='streamopt'>a</td>")
        }
        
    }
    else if (document.getElementById("streamsel").value == 'b'){
        for (var c = 0; c < rowCount; c++) {
            $('.streamopt').replaceWith("<td class='streamopt'>b</td>")
        }
    }
    else if (document.getElementById("streamsel").value == ''){
        for (var c = 0; c < rowCount; c++) {
            $('.streamopt').replaceWith("<td class='streamopt'></td>")
        }
    }
}


