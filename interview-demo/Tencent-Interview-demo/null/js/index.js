class FormValid {
    constructor(options){
        this.el = options.el;
        this.inputEl = options.inputEl;
        this.cleanEl = this.el.getElementsByClassName("form-input-clean")[0];
        this.inputName = options.inputName;
        this.errorTipsEL = options.errorTipsEL;
        this.validRules = options.validRules;

        this.inputEl.addEventListener('input', e => {
            this.validateShow();
            this.cleanBtnShow();
        });

        this.inputEl.addEventListener('focus', e => {
            setTimeout(() => {
                this.cleanBtnShow();
            },200)
        });

        this.inputEl.addEventListener('blur', e => {
            setTimeout(() => {
                console.log("blur setTimeout");
                this.cleanEl.classList.remove("active");
            },200)
        });

        this.cleanEl.addEventListener('click', e => {
            this.inputEl.value = "";
            this.inputEl.focus();
            this.cleanEl.classList.remove("active");
        });
    }

    // 根据表单校验的结果 更新视图 （ DOM 操作）
    validateShow(){
        const value = this.inputEl.value;
        const validResult = this.validate(value);

        if(validResult.error){

            console.log(`校验未通过，原因： ${validResult.rule}`);

            this.errorTipsEL.innerText= errorTipsMap[this.inputName][validResult.rule];
            this.el.classList.add("error-form");

        }else{
            if(this.inputEl.getAttribute("type") === "password"){
                const another = this.inputEl.getAttribute("id") === "password" ? "password2" : "password";
                document.getElementById(another).parentElement.parentElement.classList.remove("error-form");
            }

            this.el.classList.remove("error-form");
        }

        return validResult;
    }

    // 校验表单内容，返回校验结果
    validate(value){
        let validResult = {};
        const validRules = this.validRules;
        let validRule;
        let validParams;
        let validConfig;
        let i = 0;
        const l = validRules.length;
    
        for(;i<l;i++){
            validConfig = validRules[i].split(':');
            validRule = validConfig[0];
            validParams = validConfig.slice(1);
            validParams.unshift(value);
    
            if(validRulesMap[validRule]){
                const result = validRulesMap[validRule](...validParams);
    
                validResult = {
                    error: !result,
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

    // 更新 清除按钮的 展示状态
    cleanBtnShow(){
        if(this.inputEl.value.length){
            this.cleanEl.classList.add("active");
        }else{
            this.cleanEl.classList.remove("active");
        }
    }
}


// 实例化表单校验
const formItems = document.querySelectorAll(".form-item");
const formValidList = [];

for(i = 0; i < formItems.length; i++){
    const el = formItems[i];
    const inputEl = el.getElementsByTagName("input")[0];
    const inputName = inputEl.getAttribute("name");
    const errorTipsEL = el.getElementsByClassName("form-error-tips-words")[0];
    const validRules = inputEl.dataset.valid.split('|');

    formValidList[i] = new FormValid({
        el, 
        inputEl,
        inputName,
        errorTipsEL,
        validRules,
    });
}

// 表单提交时的校验 以及提交
document.getElementById("register").addEventListener("submit", e => {
    e.preventDefault();
    let pass = true,
        i = 0,
        l = formValidList.length;

    // 逐条校验
    for(; i < l; i++){
        if(formValidList[i].validateShow().error){
            pass = false;
        }
    }
    
    if(pass){
        const submitBtn = document.getElementById("submitBtn");
        submitBtn.setAttribute("disabled","disabled");

        setTimeout(function(){
            alert("注册成功...");
            submitBtn.removeAttribute("disabled");
        }, 2000);
    }

});

// 校验内容是否符合条件的 api
const validRulesMap = {
    notempty: function(value){
        if(value.trim() ==='') return false;
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
        if(value !==document.querySelector(selector).value) return false;
        return true;
    }
}

// 校验警告
const errorTipsMap = {
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


// 自动聚焦
document.getElementById("username").focus();