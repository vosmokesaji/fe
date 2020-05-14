
$("body")
    
    // 提交表时的校验
    .on("submit", "[data-valid-form]", function(){
        var pass = true;

        $(this).find("[data-valid]").each(function(index, el){
            if(validateShow($(el)).error){
                pass = false;
            }
        });

        console.log(`提交 校验 ${pass ? '通过' : '未通过'}`);
        
        if(pass){
            $(".btn").attr("disabled","disabled");
            setTimeout(function(){
                alert("注册成功...");
                $(".btn").removeAttr("disabled");
            }, 2000);
        }

        return false;
    })

    // 用户输入，实时校验内容并提醒
    .on("input", "[data-valid]", function(){
        validateShow($(this));
    });

/**
 * 展示校验结果，校验失败：展示警告 ， 校验成功：消除警告
 * @param {object} el 表单元素的 jquery 对象
 */
function validateShow(el){
    var validResult = validate(el),
        formItem = el.parents(".form-item"),
        formIteName = el.attr("name"),
        errorTipsBox = formItem.find(".form-error-tips-words");

    if(validResult.error){

        console.log(`校验未通过，原因： ${validResult.rule}`);

        errorTipsBox.text(errorTips[formIteName][validResult.rule]);
        formItem.addClass("error-form");

    }else{

        // 
        if(validResult.rule === "equal"){
            const another = validResult.params[0] === "password" ? "password2" : "password";
            $(`#${another}`).parents(".form-item").removeClass("error-form");
        }

        // errorTipsBox.text("");
        formItem.removeClass("error-form");
    }

    return validResult;
}

/**
 * 校验表单元素内容
 * @param {object} formItemEl 表单元素的 jquery 对象
 * @returns {object} 校验结果对象
 */
function validate(formItemEl){
    var valid = formItemEl.attr('data-valid'),
        validResult = {},
        configs = valid.split('|'),
        validRule,
        validParams,
        validConfig,
        i = 0,
        l = configs.length;

    console.log(`校验 验证`);
    for(;i<l;i++){
        validConfig = configs[i].split(':');
        validRule = validConfig[0];
        validParams = validConfig.slice(1);
        validParams.unshift(formItemEl.val());

        if(validRules[validRule]){
            var result = validRules[validRule](...validParams);

            validResult = {
                error: !result,
                element: formItemEl,
                rule: validRule,
                params:validParams
            };

            if(result == false){
                // 校验失败就停止， validResult 保存校验失败的详情
                break;
            }
        }
    }

    console.log(`校验 获得结果`, validResult);
    return validResult;
}

// 校验内容是否符合条件的 api
const validRules = {
    notempty: function(value){
        if($.trim(value) ==='') return false;
        return true;
    },
    length: function(value, minlength, maxlength){
        if(value.length < minlength || value.length > maxlength) return false;
        return true;
    },
    email: function(value){
        if(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value)) return true;
        return false;
    },
    equal: function(value, selector){
        if(value !==$(selector).val()) return false;
        return true;
    }
}

// 校验警告
const errorTips = {
    username:{
        notempty: "Username is required",
        length: "Username must be at least 3 characters"
    },
    email:{
        notempty: "Email is required",
        email: "Email is not valid"
    },
    password:{
        notempty: "Password is required",
        length: "Password must be at least 6 characters",
        equal: "The two passwords are different"
    },
    password2:{
        notempty: "Confirm password is required",
        length: "Confirm password must be at least 6 characters",
        equal: "The two passwords are different"
    }
}