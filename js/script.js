document.getElementById('meuForm').addEventListener('submit', function(event) {  
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;  
    const email = document.getElementById('email').value;
    console.log(nome);
 
    localStorage.setItem('nome', nome);  
    localStorage.setItem('email', email);  
 
    window.open('valores.html', '_blank'); 
});  