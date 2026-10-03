function createLoginTracker(userInfo){
  let attemptCount = 0;
  const login = (passwordAttempt) =>{
    attemptCount++;  
    
    if (attemptCount >3) {
      return "Account locked due to too many failed login attempts";
    } else if (passwordAttempt === userInfo.password && attemptCount < 3) {
      return "Login successful";

    } else if (passwordAttempt !== userInfo.password && attemptCount === 1){
      return "Attempt 1: Login failed";

    } else if (passwordAttempt !== userInfo.password && attemptCount === 2){
      return "Attempt 2: Login failed"; 

    } else if (passwordAttempt !== userInfo.password && attemptCount === 3){
      return "Attempt 3: Login failed";

    } 
  };
  
  return login;
}



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};