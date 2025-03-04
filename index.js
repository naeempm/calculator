function buttonName(y){
    document.getElementById("valuebox").value =  document.getElementById("valuebox").value + y
}

function clearall(){
    document.getElementById("valuebox").value = ""
}

function result(){
    let storage = document.getElementById("valuebox").value 
    let result = eval(storage)
    document.getElementById("valuebox").value = result
}