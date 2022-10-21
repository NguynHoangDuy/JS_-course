const input = document.querySelector(".input")
const checkLength = document.querySelector(".check-length")
const checkNum = document.querySelector(".check-number")
const checkUpper = document.querySelector(".check-uppercase")
const checkSpeacial = document.querySelector(".check-speacial")
input.addEventListener("input", (e)=>{
    const reLength = /.{8,}/
    const reNum = /\d{1,}/
    const reUpper = /[A-Z]{1,}/
    const reSpeacial = /[^A-Za-z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]{1,}/
    

    if(!e.target.value)
    {
        document.querySelectorAll(".check-item").forEach((item) =>{
            item.classList.remove("true")
            item.classList.remove("false")
        })
    }
    else{
        passWordInputClass(checkLength, reLength, e.target.value)
        passWordInputClass(checkNum, reNum, e.target.value)
        passWordInputClass(checkUpper, reUpper, e.target.value)
        passWordInputClass(checkSpeacial, reSpeacial, e.target.value)
    }
    function passWordInputClass(selector, regex, value) {
        if(regex.test(value))
        {
            selector.classList.add("true")
            selector.classList.remove("false")
        }
        else
        {
            selector.classList.add("false")
            selector.classList.remove("true")
        }
    }
})