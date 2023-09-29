let parameter_box = document.getElementById("content-type-parameter")
let json_box = document.getElementById("content-type-json-post")
let params_radio = document.getElementById("params_radio")
let json_radio = document.getElementById("json_radio")
let add_parameter_button = document.getElementById("add-parameter-button")
let parameter_count = 

parameter_box.style.display= 'none'

function getElementFromString(string ){
    let div = document.createElement("div")
    div.innerHTML=string
    return div.firstElementChild

}

function deleteParameter(){

}

params_radio.addEventListener('click',()=>{
    json_box.style.display='none'
    parameter_box.style.display='block'
})

json_radio.addEventListener('click',()=>{
    parameter_box.style.display='none'
    json_box.style.display='block'

})
 add_parameter_button.addEventListener('click',()=>{

    let params = document.getElementById("params")
    let string = `<div class="container text-center my-4">
                        <div class="row">
                          <div class="col">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Key">
                          </div>
                          <div class="col">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Value">
                          </div>
                          <div class="col align-items-start">
                            <button type="button" class="btn btn-primary delete_param" id="add-parameter-button">-</button>
                          </div>
                        </div>
                    </div>`
    let paramElement = getElementFromString(string)
    let delete_buttons = document.getElementsByClassName("delete_param")
    for(item of delete_buttons){
        item.addEventListener('click',(e)=>{
            console.log(e.target.parentElement.paramElement)
            e.target.parentElement.parentElement.remove()
            console.log(delete_buttons.length)
        })
    }
    params.appendChild(paramElement)
 })

 let submit = document.getElementById("submit")
 submit.addEventListener("click",()=>{
    document.getElementById("json-text-area-get").setAttribute("placeholder","Please wait...Fetching the Data")

    // let request_type = document.querySelector(".dropdown-toggle::selected").value
    let content_type = document.querySelector("input[name='content-type']:checked").value
    console.log("The content type is: "+content_type)
    let url = document.getElementById("url").value;
    console.log("The URL is "+url)

    if(content_type=="JSON"){
      let json = document.getElementById("json-text-area").value
      console.log(json)
    }

 })