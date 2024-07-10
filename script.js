document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();

    let name = document.getElementById('name').value;
    let phn = document.getElementById('phn').value;

    document.getElementById('displayName').innerHTML="Your name is: "+name;
    document.getElementById('displayMobile').innerHTML="Your mobile is: "+phn;

    const x = document.getElementById('submit');
    x.submit = () =>{
        let info = document.getElementById('information');
        info.classList.toggle('active');
    };

});

