let boxes =document.querySelectorAll('.box');

let drop = document.querySelector('.drop');

let droparea=document.querySelector('.drag');
for (let box of boxes) {

    box.addEventListener('dragstart',function(e){
        e.dataTransfer.setData('param',this.id)
      
    })
    
    droparea.addEventListener('dragover', function(e){
     e.preventDefault();
    })
        
}


droparea.addEventListener('drop',function(e){
    let id = e.dataTransfer.getData('param')
    droparea.append(document.getElementById(id))
})


drop.addEventListener('dragover',function(e){
    e.preventDefault();
})

drop.addEventListener('drop',function(e){
    let id = e.dataTransfer.getData('param')
    drop.append(document.getElementById(id))
})



