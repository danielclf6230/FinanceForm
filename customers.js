let customers = [];

function populateTable(){
    const tbody = document.querySelector('#customersTable tbody');

    tbody.innerHTML = '';
    for(const i in customers){
        const c = customers[i];

        tbody.innerHTML += `<tr><td>${c.date}</td><td>${c.name}</td><td>${c.address}</td><td>${c.postalCode}</td><td>${c.phone}</td><td>${c.email}</td><td><a href='#' class='btn btn-danger action-delete'>Delete</a></td></tr>`;
    }

    const actions = document.getElementsByClassName('action-delete');

    console.log(actions)

    for(let i = 0; i < actions.length; i ++){
        const actionAnchor = actions.item(i);

        actionAnchor.onclick = function (e) {
            e.preventDefault();

            customers.splice(i,1);

            populateTable();
        }
    }
}

function onsubmit(e) {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const name = firstName.concat(' ', lastName);
    const address = document.getElementById('address').value;
    const postalCode = document.getElementById('postalCode').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    
    const customer = {date,name,address,postalCode,phone,email};
    customers.push(customer);

    populateTable();

}

myForm.onsubmit = onsubmit;