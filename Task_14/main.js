function naturalNumbersList(m,n){
    if(m<n){
        for(let i = m;i<=n;i++){
            document.write(i + "<br>");}}
    else{
        for(let i = n;i<=m;i++){
            document.write(i + "<br>")}
        }
}

naturalNumbersList(3,12);