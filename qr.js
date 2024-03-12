// let input=document.querySelector("#url")
let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    let input=document.querySelector("#url").value
    e.preventDefault()
    let qrUrl=`https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=${input}`
    let image=document.querySelector("img")
    image.src=qrUrl
    // console.dir(image)
    // console.log(input)

})