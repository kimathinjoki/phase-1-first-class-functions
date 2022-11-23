
const spy = () => 2+2;


function receivesAFunction(spy){
    return spy();
}


const returnsANamedFunction = () => receivesAFunction;
const fn = returnsANamedFunction();



function returnsAnAnonymousFunction(){
    return function(){return 5+4};
}
