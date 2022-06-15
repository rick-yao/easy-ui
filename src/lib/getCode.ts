export const getCode =(filename:string)=>{
    let path = `/src/components/${filename}.vue`
    let xhr = new XMLHttpRequest()
    xhr.open('GET', path);
    xhr.responseType = 'text';
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.response);
        }
    };
    xhr.send();
}
export default {getCode}