import { searchInIris } from "./apicalls.js";

export function getInput() {
    let query; 
    $('input').change(function(){
       query = $(this).val();
    });
    $('button').click(function(){
        var res = searchInIris(query);
        console.log(res);
    });
}

