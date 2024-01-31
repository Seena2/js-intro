/*
//ASYNC
async function f(){
    return 1;
}
f().then(alert);
//or explicitly retuning a promise
async function f(){
    return Promise.resolve(1)
}
f().then(alert);


//AWAITS
async function f(){
    let promise= new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("done!"),1000)
    });
    let result= await promise;
    alert(result);
}

f();
*/
//await only works with async function and we dont need to use then() when retuning promise whith await
//Example
async function showAvatar(){
    //read from JSON file
    let response= await fetch('/article/promise-chaining/user.json');
    let user= await response.json();

     // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);


  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();