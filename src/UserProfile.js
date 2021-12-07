export function UserProfile() {
    var userDetails = [
        { username : "Madhavi Latha Yayavaram",
        emailid :  "lathayvm@gmail.com",
        phone  :  "9425057832",
        company :  "NexRea Inc.",
       loginname: "Madhavi",
       password : "Madhavi"
      
       },

       { username : "Shivanurag Yayavaram",
       emailid :  "shiv@gmail.com",
       phone  :  "9425054832",
       company :  "NA",
      loginname: "Shiv",
      password : "Shiv" 
       },

      { username : "Ganesh Yayavaram",
       emailid :  "ganesh@gmail.com",
       phone  :  "9565054832",
       company :  "NA",
      loginname: "Ganesh",
      password : "Ganesh" 
      
}
    ];

   return ( 
       <div> <h2> {userDetails}</h2></div> );
  
}