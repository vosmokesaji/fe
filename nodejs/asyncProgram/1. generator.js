/**
 * generator 简单使用
 */

function on001(){
    function*gen(x){
        console.log("X: ",x);
        let y = yield x * 2;
        console.log("Y: ",y);
        return y;
    }
    
    let g = gen(1);
    console.log(g.next());
    console.log(g.next(333));
}

/**
 * generator 处理错误
 */

function on002(){
    function* gen(x){
        let y;
        try{
            y = yield x + 2;
        }catch(e){
            console.log(e);
        }
        return y;
    }

    const g = gen();

    g.next();
    g.throw("出错啦");
}



/**
 * 实际的例子
 */
function on003(){

    function* gen(){
        var url = "https://api.github.com/users/github";
        var result = yield fetch(url);
        console.log(result);
    }

    let g = gen();
    let result = g.next();
    result.value.then((data)=>{
        return data.json();
    }).then((data) => {
        g.next(data);
    })
}


const fn = on003
fn()