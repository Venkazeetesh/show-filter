let header=[
    {
        name:"Slider-1",
    },
    {
        name:"Slider-2"
    },
    {
        name:"Slider-3"
    }
];
let filter=[
    {
        "Date":"Yesterday",
        "Date-2":"Tomorrow",
        "Date-3":"Today"
    },
    {
        "Language-1":"Hindi",
        "Language-2":"Tamil",
        "Language-3":"Telungu",
        "Language-4":"Malayalam"
    },
    {
        "Catorgories-1":"Worshshops",
        "Catogories-2":"Online streaming",
        "Catogories-3":"Kids allowed"
    }

];
for(let j=0;j<filter.length;j++){
    let a=filter[j];
    for(key in a){
        console.log(a[key]);
    }

}