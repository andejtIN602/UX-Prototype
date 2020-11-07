$.ajax({
    url: 'https://gist.githubusercontent.com/eallenOP/b40fa9bba517ff258da395c79edd2477/raw/a8175e0b5c915d9e2d857a2f114704094ade22b9/attendance.json',
    dataType: 'json',
    success: function(data) {
    console.log(data);
    var stream1r = "<td><input type ='radio' id='stream1' value='a'></input></td>";
    var stream2r = "<td><input type ='radio' id='stream1' value='a'></input></td>";
    var stream1 = "<td><button id='stream1' value='a'></button></td>";
    var stream2 =  "<td><button id='stream2' value='b'></button></td>";
    for (var i = 0; i < data.length; i++) {
            $("#sturole").append("<tr><td>" + data[i].name.first + " " + data[i].name.last + "</td><td>" + data[i].attendance + "</td><td><select></select></td>" + stream1r + stream2r + "</tr>");
            $('select').attr('id', 'class1');
    }
        $('select').append('<option>N/A</option>' + '<option>P</option>' + '<option>E</option>' + '<option>A</option>');
        $('select').append('<option>N/A</option>' + '<option>P</option>' + '<option>E</option>' + '<option>A</option>');
     }
    });
