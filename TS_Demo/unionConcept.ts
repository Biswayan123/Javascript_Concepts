let userId:(string | number);
userId = 123;
userId = 'John';

function getCustomerInfo(customerId:(string | number)){
    if(typeof customerId == 'number'){
        console.log(customerId + "_Biswayan");
    }
    else{
        console.log("_Biswayan");
    }
};
getCustomerInfo(123);