document.querySelector('.button1').addEventListener('click', function(){

	var firstnme = document.querySelector('.inputfirstname').value;
	var lastnme = document.querySelector('.inputlastname').value;
	var usernme = document.querySelector('.inputusername').value;
	var emal = document.querySelector('.inputEmail').value;
	var degre = document.querySelector('.inputdegree').value;
	var yeaar = document.querySelector('.inputyear').value;
	var phoneno = document.querySelector('.inputphonenumber').value;
	if (firstnme == 0)
	{
		document.querySelector('.inputfirstname').style.border = '2px solid red';
	}
	else{
		document.querySelector('.inputfirstname1').innerHTML = firstnme;
		document.querySelector('.inputfirstname1').innerHTML = firstnme;

	}

	if (lastnme == 0)
	{
		document.querySelector('.inputlastname').style.border = '2px solid red';
	}
	else{
		document.querySelector('.inputlastname1').innerHTML = lastnme;
	}

	if (usernme == 0)
	{
		document.querySelector('.inputusername').style.border = '2px solid red';
	}
	else{
		document.querySelector('.inputusername1').innerHTML = usernme;
	}

	if (emal == 0)
	{
		document.querySelector('.inputEmail').style.border = '2px solid red';
	}
	else{
		document.querySelector('.inputEmail1').innerHTML = emal;
	}

	if (degre == 0)
	{
		document.querySelector('.inputdegree').style.border = '2px solid red';
	}
	else{
		document.querySelector('.inputdegree1').innerHTML = degre;
	}

	if (yeaar == 0)
	{
		document.querySelector('.inputyear').style.border = '2px solid red';

	}
	else{
		document.querySelector('.inputyear1').innerHTML = yeaar;
	}

	if (phoneno == 0)
	{
		document.querySelector('.inputphonenumber').style.border = '2px solid red';
	}
	else{
		document.querySelector('.inputphonenumber1').innerHTML = phoneno;
	}

	// end of entering data

	// for roll num

	var de = degre.slice(0,2);
	var ph = phoneno.slice(2,3);
	var fi = firstnme.slice(0,2);
	var us = usernme.slice(-2);
	var ye = yeaar.slice(2);

	var rollno = de + ph + fi + "-" + us + ye;
	
	document.querySelector('.inputrollno').value = rollno;

	document.querySelector('.rollno1').innerHTML = rollno;

	// end roll num
})



var rowIdx = 0; 
  
// jQuery button click event to add a row. 
$('#addBtn').on('click', function () { 
  	var firstnme = document.querySelector('.inputfirstname').value;
	var lastnme = document.querySelector('.inputlastname').value;
	var usernme = document.querySelector('.inputusername').value;
	var emal = document.querySelector('.inputEmail').value;
	var degre = document.querySelector('.inputdegree').value;
	var yeaar = document.querySelector('.inputyear').value;
	var phoneno = document.querySelector('.inputphonenumber').value;






  var de = degre.slice(0,2);
	var ph = phoneno.slice(2,3);
	var fi = firstnme.slice(0,2);
	var us = usernme.slice(-2);
	var ye = yeaar.slice(2);

	var rollno = de + ph + fi + "-" + us + ye;
	
    // Adding a row inside the tbody. 
    $('.tbody').append(`<tr id="R${++rowIdx}"> 
            <td class="index"> ${rowIdx} </td>
            <td class="firstname"> ${firstnme} </td>
            <td class="lastname"> ${lastnme} </td>
            <td class="username"> ${usernme} </td>
            <td class="email"> ${emal} </td>
            <td class="degree"> ${degre} </td>
            <td class="year"> ${yeaar} </td>
            <td class="phone"> ${phoneno}</td>
            <td class="rollno"> ${rollno} </td>
            <td> <button class="remove">Remove</button><button type="button" class="btn btn-primary  view" data-toggle="modal" data-target=".bd-example-modal-lg">View</button> </td> 
           </tr>`); 
}); 

$('.tbody').on('click', '.remove', function () { 
    var child = $(this).closest('tr').nextAll(); 

  $(this).closest('tr').remove(); 
    rowIdx--; 
});


$('.tbody').on('click', '.view', function (){ 
  var row =$(this).closest('tr');
  // console.l
  var col1=row.find('.index').text();
  var col2=row.find('.firstname').text();
  var col3=row.find('.lastname').text();
  var col4=row.find('.username').text();
  var col5=row.find('.email').text();
  var col6=row.find('.degree').text();
  var col7=row.find('.year').text();
  var col8=row.find('.phone').text();
  var col9=row.find('.rollno').text();
  // document.querySelector('.First').innerHTML=col2
  // alert(col1+col2+col3+col4+col5+col6+col7+col8+col9);

   $('.table-body').html(`<tr> 
        <td> ${col1} </td>
       	<td> ${col2} </td>
    	<td> ${col3} </td>
        <td> ${col4} </td>
        <td> ${col5} </td>
    	<td> ${col6} </td>
        <td> ${col7} </td>
    	<td> ${col8}</td>
        <td> ${col9} </td>
        </tr>`);
});

