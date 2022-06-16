var select = 'coka';
var omniTurn = false;
var lightOn = true;

function showModel(selected, selectedInfo){
    select = selected;
    document.getElementById('coka').style.display = 'none';
    document.getElementById('fanta').style.display = 'none';
    document.getElementById('sprite').style.display = 'none';
    document.getElementById('cokaInfo').style.display = 'none';
    document.getElementById('fantaInfo').style.display = 'none';
    document.getElementById('spriteInfo').style.display = 'none';
    document.getElementById(selected).style.display = 'block';
    document.getElementById(selectedInfo).style.display = 'block';
}


function showModelWF(){
    document.getElementById('coka').style.display = 'none';
    document.getElementById('fanta').style.display = 'none';
    document.getElementById('sprite').style.display = 'none';
    document.getElementById('cokaWireframe').style.display = 'none';
    document.getElementById('fantaWireframe').style.display = 'none';
    document.getElementById('spriteWireframe').style.display = 'none';
    if(select === 'coke'){
        document.getElementById(cokaWireframe).style.display = 'block';
    }
    else if(select === 'fanta'){
        document.getElementById(fantaWireframe).style.display = 'block';
    }
    else if(select === 'sprite'){
        document.getElementById(spriteWireframe).style.display = 'block';
    }
}

var spinning = false;

function spinY()
{
    spinning = !spinning;
    changeModelRota(spinning);
}

function stopRotation() {
    spinning = false;
    changeModelRota(spinning);
}

function changeModelRota(spinning){
    if (select === 'coka') {
        document.getElementById('model__cokaRotation').setAttribute('enabled', spinning.toString());
    } else if (select === 'fanta') {
        document.getElementById('model__fantaRotation').setAttribute('enabled', spinning.toString());
    } else if (select === 'sprite') {
        document.getElementById('model__spriteRotation').setAttribute('enabled', spinning.toString());
    }
}

var light = false;

function turnDefault(){
    light = !light;
    if (select === 'coka') {
        document.getElementById('model__cokadefaultLight').setAttribute('on', light.toString());
    } else if (select === 'fanta') {
        document.getElementById('model__fantadefaultLight').setAttribute('on', light.toString());
    } else if (select === 'sprite') {
        document.getElementById('model__spritedefaultLight').setAttribute('on', light.toString());
    }
}


function turnOmni(){
    omniTurn = !omniTurn;
    if(select === 'coka'){
        document.getElementById('model__cokaOmni1').setAttribute('on', omniTurn.toString());
        document.getElementById('model__cokaOmni2').setAttribute('on', omniTurn.toString());
        document.getElementById('model__cokaOmni3').setAttribute('on', omniTurn.toString());
        document.getElementById('model__cokaOmni4').setAttribute('on', omniTurn.toString());
    }
    else if(select === 'fanta'){
        document.getElementById('model__fantaOmni1').setAttribute('on', omniTurn.toString());
        document.getElementById('model__fantaOmni2').setAttribute('on', omniTurn.toString());
        document.getElementById('model__fantaOmni3').setAttribute('on', omniTurn.toString());
        document.getElementById('model__fantaOmni4').setAttribute('on', omniTurn.toString());
    }
    else if(select === 'sprite'){
        document.getElementById('model__spriteOmni1').setAttribute('on', omniTurn.toString());
        document.getElementById('model__spriteOmni2').setAttribute('on', omniTurn.toString());
        document.getElementById('model__spriteOmni3').setAttribute('on', omniTurn.toString());
        document.getElementById('model__spriteOmni4').setAttribute('on', omniTurn.toString());
    }
}


function headlight()
{
    lightOn = !lightOn;
    if(select === 'coka'){
        document.getElementById('model__cokaheadlight').setAttribute('headlight', lightOn.toString());
    }
    else if(select === 'fanta'){
        document.getElementById('model__fantaheadlight').setAttribute('headlight', lightOn.toString());
    }
    else if(select === 'sprite'){
        document.getElementById('model__spriteheadlight').setAttribute('headlight', lightOn.toString());
    }
}

var pi = Math.PI;

function cameraFront(){
    if(select === 'coka') {
        document.querySelector('[DEF="cokaModel"]').setAttribute('rotation', '0.000000 1 1 3.141593');
        document.getElementById('model__cokaCamera').setAttribute('position', '-0.00 0.00 0.00');
    }
    else if(select === 'fanta') {
        document.querySelector('[DEF="fantaModel"]').setAttribute('rotation', '0.000000 1 1 3.14159');
        document.getElementById('model__fantaCamera').setAttribute('position', '-0.00 0.00 0.00');
    }
    else if(select === 'sprite') {
        document.querySelector('[DEF="spriteModel"]').setAttribute('rotation', '0.000000 1 1 3.14159');
        document.getElementById('model__spriteCamera').setAttribute('position', '-0.00 0.00 0.00');
    }
}

function cameraBack(){
    if(select === 'coka') {
        document.querySelector('[DEF="cokaModel"]').setAttribute('rotation', '0.3 0.5 0 3.14159');
        document.getElementById('model__cokaCamera').setAttribute('position', '-0.00 0.00 0.00');
    }
    if(select === 'fanta') {
        document.querySelector('[DEF="fantaModel"]').setAttribute('rotation', '0.3 0.5 3.14159');
        document.getElementById('model__fantaCamera').setAttribute('position', '-0.00 0.00 0.00');
    }if(select === 'sprite') {
        document.querySelector('[DEF="spriteModel"]').setAttribute('rotation', '0.3 0.5 3.14159');
        document.getElementById('model__spriteCamera').setAttribute('position', '-0.00 0.00 0.00');
    }

}

function cameraLeft(){
    if(select === 'coka'){
        document.querySelector('[DEF="cokaModel"]').setAttribute('rotation', '0.000000 0 0 3.14159');
        document.getElementById('model__cokaCamera').setAttribute('position', '-0.00 0.00 0.00');
    }
    else if(select === 'fanta'){
        document.querySelector('[DEF="fantaModel"]').setAttribute('rotation', '0 0 0 3.14159');
        document.getElementById('model__fantaCamera').setAttribute('position', '-0.00 0.00 0.00');
    }
    else if(select === 'sprite'){
        document.querySelector('[DEF="spriteModel"]').setAttribute('rotation', '0 0 0 3.14159');
        document.getElementById('model__spriteCamera').setAttribute('position', '-0.00 0.00 0.00');
    }

}

function cameraRight(){
    if(select === 'coka'){
        document.querySelector('[DEF="cokaModel"]').setAttribute('rotation', '0 0.5 0 3.14159');
        document.getElementById('model__cokaCamera').setAttribute('position', '-0.00 0.00 0.00');
    }
    else if(select === 'fanta'){
        document.querySelector('[DEF="fantaModel"]').setAttribute('rotation', '0 0.5 0 3.14159');
        document.getElementById('model__fantaCamera').setAttribute('position', '-0.00 0.00 0.00');
    }
    else if(select === 'sprite'){
        document.querySelector('[DEF="spriteModel"]').setAttribute('rotation', '0 0.5 0 3.14159');
        document.getElementById('model__spriteCamera').setAttribute('position', '-0.00 0.00 0.00');
    }
}


function cameraTop(){
    if(select === 'coka'){
        document.querySelector('[DEF="cokaModel"]').setAttribute('rotation', '0 1 0 1.5708');
    }
    else if(select === 'fanta'){
        document.querySelector('[DEF="fantaModel"]').setAttribute('rotation', '0 1 0 4.7124');
    }
    else if(select === 'sprite'){
        document.querySelector('[DEF="spriteModel"]').setAttribute('rotation', '0 1 0 4.7124');
    }
}

function cameraBottom(){
    if(select === 'coka'){
        document.querySelector('[DEF="cokaModel"]').setAttribute('rotation', '0 1 0 4.7124');
    }
    else if(select === 'fanta'){
        document.querySelector('[DEF="fantaModel"]').setAttribute('rotation', '0 1 0 1.5708');
    }
    else if(select === 'sprite'){
        document.querySelector('[DEF="spriteModel"]').setAttribute('rotation', '0 1 0 1.5708');
    }
}






