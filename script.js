$(document).ready(onReady);

function onReady() {
    console.log('jQuery, hype');

    $('#submitButton').on('click', handleSubmit)

    $('#tableBody').on('click', '.deleteButton', deleteEmployee)

}

function deleteEmployee(){
    console.log('Deleted');
    $(this).parent().parent().remove()
}

let annualyTotal = 0;

function handleSubmit (event) {
    event.preventDefault();
    //console.log('In Handle Submit');

    const firstNameText = $('#firstNameSubmit').val();
    //console.log(firstNameText);
    const lastNameText = $('#lastNameSubmit').val();
    //console.log(lastNameText);
    const employeeIdText = $('#employeeIdSubmit').val();
    //console.log(employeeIdText);
    const jobTitleText = $('#jobTitleSubmit').val();
    //console.log(jobTitleText);
    const annualSalaryText = Number($('#annualSalarySubmit').val());
    //console.log(annualSalaryText);

    
 
    let monthlyCost =  annualyTotal += annualSalaryText / 12;

    $('#tableBody').append(`
     <tr>
        <th>${firstNameText}</th>
        <th>${lastNameText}</th>
        <th>${employeeIdText}</th>
        <th>${jobTitleText}</th>
        <th>${annualSalaryText}</th>
        <td><button class="deleteButton">Delete Employee</button></td>
      </tr> `)


      $('#firstNameSubmit').val("")
      $('#lastNameSubmit').val("")
      $('#employeeIdSubmit').val("")
      $('#jobTitleSubmit').val("")
      $('#annualSalarySubmit').val("")

 console.log(monthlyCost);
 $('#monthCost').text(`Monthly Cost: $
 ${Math.round(monthlyCost)}
 `)

if(monthlyCost > 20000){
console.log('???');
$('#monthCost').css('background-color', 'red')

}
}