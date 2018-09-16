function namespace(oNamespace, sPackage) {
    // console.log(oNamespace);
    var packages = sPackage.split(".");
    var content = oNamespace;
    for(var i in packages){
        if (!content.hasOwnProperty(packages[i])){       
            content[packages[i]] = {} 
            content =  content[packages[i]];
        }
        // content =  content[packages[i]];
    }
    
    return oNamespace;
}

var res = namespace({a: {test: 1, b: 2}}, 'a.b.c.d');
console.log(res);
