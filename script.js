function calculateAge(){
    const birthdate = document.getElementById('birthdate').value;
    const result = document.getElementById('result');
    
    if(birthdate){
        const today = new Date();
        const birthDate = new Date(birthdate);
        
        const months = today.getMonth() - birthDate.getMonth();
        const years = today.getFullYear() - birthDate.getFullYear();
        
        if(years == 0){
            result.innerHTML = `your age is ${months} months.`;
        } else {
            result.innerHTML = `your age is ${years} years ${months} months.`;
        }
        result.style.color = 'green';

    } else {
        result.innerText = "please enter yout Birthdate";
        result.style.color = "red";
    }


}
