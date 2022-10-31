// ## Object Oriented Programming 

// Design a class pattern for the following requirements using JavaScript. 

// A pharmacist writes prescriptions to people. 

// A cashier collects cash and returns cash to pharmacy 

// A manager manages employees 

// A manager can sometimes work as a cashier and a pharmacist. - 



const writePrescription={
    presc:function(){
    console.log('Writing prescriptions to people.')
    }
    
}

const collectCash={
    collect:function(){
    console.log('Collecting Cash.')
    }
    
}

const retunCash={
    returnCash:function(){
    console.log('Returning Cash to pharmacy')
    }
    
}


const ManageEmployees={
    manage:function(){
    console.log('Managing Employees')
    }
    
}

function mixin(...args){
    return Object.assign({},...args)
}
manager = mixin(collectCash,retunCash,ManageEmployees)
cashier= mixin(collectCash,retunCash)
pharmacist = mixin(writePrescription)
console.log(manager);
console.log(cashier);
console.log(pharmacist.presc());





// class manager{
//     constructor(){
//         this.Mwork
// }

// managerfunc=()=>{
//         console.log("manages employees")
// }
     
// }

// const work = new manager()

// console.log(work.managerfunc());




