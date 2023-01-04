const data = require("./data.js");

// console.log(data);

var tutorData = {
      "id": 1,
      "first_name": "Rohit",
      "last_name": "Ranjan Singh",
      "avatar":"",
      "email": "rohitranjan2702@gmail.com",
      "password": "#password",
      "about":"Hey I am an aspiring Frontend Developer, currently pursuing btech.",
      "age": 20,
      "techstack": ["BOOTSTRAP", "CSS", "JAVASCRIPT", "HTML"], //alphabetically sorted
      "qualification":"",
      "doubtSolved": 12,
      "ratings": 4,
      "socialLinks": ["github", "linkedin"]
}

var doubt = {
    "id":1,
    "created_at": "04-01-2023:10:21",
    "updated_at": "04-01-2023:10:21",
    "imgURL":"https://doubt.img",
    "description": "lorem ipsum dolor",
    "tags": "frontEnd",
    "techstack": ["CSS", "JAVASCRIPT"],

    
}

// filtering the data 
const x = data.filter(function (entry) {
    return entry.color === 'Orange';
  });

//   array search function
// const arr = tutorData.techstack;
// const arr = ["BOOTSTRAP", "CSS", "JAVASCRIPT", "HTML"];
// const arrLength = arr.length;
// const arr0 = arr[0];
// console.log(arr0);

var search = function (arr , value) {
    // var value = "HTML";
    // const arr = tutorData.techstack;

    for(i=0;i<arr.length;i++) {

        result = arr[i].toLocaleCompare(value); // returns 0 if matched 
    
        if(result === 0) {
            return i;
        } else {
            console.log(false);
        }
        console.log(arr[i]);
    }
    // binary search
    // let start=0, end= arrLength - 1;
         
    // // Iterate while start not meets end
    // while (start<=end){
 
    //     // Find the mid index
    //     let mid=Math.floor((start + end)/2);
    //     // If element is present at mid, return True
    //     if (arr[mid] === value) 
    //         return true;
 
    //     // Else look in left or right half accordingly
    //     else if (arr[mid] < x)
    //          start = mid + 1;
    //     else
    //          end = mid - 1;
    // }
  
    // return false;
    return arr[i] ;   

}
search(tutorData.techstack, "HTML");
// search();
  
//   const y = tutorData.filter(function (entry) {
//     return entry.techstack === ['HTML'];
//   });
  const z = tutorData.techstack[0].toLowerCase();
//   console.log(y);
//   console.log(z);
//   console.log(x);