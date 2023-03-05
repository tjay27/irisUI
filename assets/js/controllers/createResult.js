export function createResult(data){
    let results = data['output']['results'];
    
    // show page number hyperlink


    // create the individual result
    let currPage = 1;

    let rangeStart = (currPage-1)*10;
    let rangeEnd = rangeStart + 10;
    let pageWiseResults = results.slice(rangeStart, rangeEnd);

    
    pageWiseResults.forEach(res => {
        let {a, c, d, t} = res;
        let result = ` <div class="result">
                        <a href=${c} target="_blank" rel="noopener noreferrer">
                            <div class="link">${c}</div>
                        </a>
                        <a href=${c} target="_blank" rel="noopener noreferrer">
                            <h2 class="result-heading">${t}</h2>
                        </a>
                        <div class="result-desc">${d}</div>
                    </div>`;
        $(result).insertBefore('#moreResults');
    });
}