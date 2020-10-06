
function generate()
{
    var img= document.createElement('img');
    img.setAttribute('src','http://thecatapi.com/api/images/get?format=src&type=gif');
    
   //* ask is this correct way to write js... googled to find this... what does .appendChild(img) mean?? *//
    document.getElementById('CatGenerator').appendChild(img);
}

function reset()
{
    document.getElementById('CatGenerator').remove();
}
                    