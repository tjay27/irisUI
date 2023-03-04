export function searchInIris(text) {
    fetch("http://127.0.0.1:1313/api/modules?_module=iris&query=test")
        .then(data => { console.log(data.json()) }).
        catch((err) => {
            console.log(err);
        })
}



