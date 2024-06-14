const fetchUserInfo = async() =>{
    const response = await fetch('https://reqres.in/api/users?page=2');
    if(!response.ok){
        throw new Error("User data not found");
    }
    const userData = await response.json();
    console.log(userData);
};

// fetchUserInfo();

const user1 = {
    name: 'John',
    age: 30,
    email: 'abc@xyz.com',
    company: 'Google',
    position: 'Software Engineer',
    location: 'California',
    salary: 100000,
    experience: 5,
};

const user2 = {
    name: 'Mark',
    age: 32,
    email: 'abcd@xyzk.com',
    company: 'Meta',
    position: 'Software Engineer in Test',
    location: 'Florida',
    salary: 50000,
    experience: 2,
};
console.table({user1, user2});