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

function handleSubmit (event) {
    event.preventDefault();
    console.log('In Handle Submit');

    const firstNameText = $('#firstNameSubmit').val();
    console.log(firstNameText);
    const lastNameText = $('#lastNameSubmit').val();
    console.log(lastNameText);
    const employeeIdText = $('#employeeIdSubmit').val();
    console.log(employeeIdText);
    const jobTitleText = $('#jobTitleSubmit').val();
    console.log(jobTitleText);
    const annualSalaryText = $('#annualSalarySubmit').val();
    console.log(annualSalaryText);

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


}


