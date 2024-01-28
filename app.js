var Alert = new CustomAlert();

function CustomAlert(){
    this.render = function(){
        //show Modal
        let popUpBox = document.getElementById('popUpBox');
        popUpBox.style.display = "block";
        //Close Modal
        document.getElementById('CloseModal').innerHTML = '<a href="index.html"><button type="button" a href>¡Si quiero!</button></a>'
    }
}

this.ok = function(){
    document.getElementById('popUpBox').style.display = "none";
    document.getElementById('popOverlay').style.display = "none";
}