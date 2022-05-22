// 1. Api url
const url="https://jsonplaceholder.typicode.com/users";


// 2. fetch the users from Api url
function fetchUsers(){
    fetch(url).then((Response)=>Response.json()).then((data)=>
    { renderUsers(data);
    });
}


// 3. Render the users in the DOM
function renderUsers(usersData){
      //console.log(usersData);
      const ul=document.getElementById("user-list-container");
      //console.log(ul);

      // render an li tag for each of the data
      usersData.forEach((user, index) => {
          console.log(user, index + 1);
          const li=document.createElement("li");
          li.innerHTML=`
          <span> ${index+1}. </span>
          <span> ${user.name} </span>
          <span>-</span>
          <span class="username">${user.username}</span>
          `;
        //appending the current li tag to the ul tag
       ul.appendChild(li);        
          
     });

} 

// 4. Add the search function to the DOM
 function searchUsersByUsername(){
     const input=document.getElementById("search");
     const ul=document.getElementById("user-list-container");
     const inputValue=input.value.toUpperCase();
     const usersList=ul.querySelectorAll("li");
     

     //loop through th users and render the usersname that matches 
     for( let index=0; index <usersList.length; index++){
         const usernameSpanTag=usersList[index].querySelector(".username");
         const UsernameSpanTagValue=usernameSpanTag.innerText.toUpperCase();
        const isMacth=UsernameSpanTagValue.indexOf(inputValue) >-1;
        
        if(isMacth){
            usersList[index].style.display="block";

        }else{
            usersList[index].style.display="none";
        }
    }

     
    
 }



fetchUsers();