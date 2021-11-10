const KEYS ={
    customers:'customers',
    customerId:'customerId'
}

export function insertCustomer(data) {
    let customers=getAllCustomers();
    data['id'] = generateCustomerId()
    customers.push(data)
    localStorage.setItem(KEYS.customers,JSON.stringify(customers))
}

export function updateCustomer(data) {
    let customers = getAllCustomers();
    let recordIndex = customers.findIndex(x => x.id === data.id);
    customers[recordIndex] = { ...data }
    localStorage.setItem(KEYS.employees, JSON.stringify(customers));
}

export function deleteCustomer(id) {
    let customers = getAllCustomers();
    customers = customers.filter(x => x.id !== id)
    localStorage.setItem(KEYS.customers, JSON.stringify(customers));
}

export function generateCustomerId() {
    if (localStorage.getItem(KEYS.customerId) == null)
        localStorage.setItem(KEYS.customerId, '0')
    var id = parseInt(localStorage.getItem(KEYS.customerId))
    localStorage.setItem(KEYS.customerId, (++id).toString())
    return id;
}

export function getAllCustomers() {
    if (localStorage.getItem(KEYS.customers) == null)
        localStorage.setItem(KEYS.customers, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.customers));

}


// export function getAllEmployees() {
//     if (localStorage.getItem(KEYS.employees) == null)
//         localStorage.setItem(KEYS.employees, JSON.stringify([]))
//     let employees = JSON.parse(localStorage.getItem(KEYS.employees));
//     //map departmentID to department title
//     let departments = getDepartmentCollection();
//     return employees.map(x => ({
//         ...x,
//         department: departments[x.departmentId - 1].title
//     }))
// }
