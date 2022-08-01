
import {
    onFormInit,
    onFormMount,
    createForm,
    onFormInitialValuesChange,
    onFormInputChange,
    onFormReact,
    onFormValuesChange,
    onFormSubmit,
    onFormSubmitStart,
    onFormSubmitEnd,
    onFormSubmitFailed,
    onFormSubmitSuccess,
    onFormSubmitValidateStart,
    onFormSubmitValidateEnd,
    onFormSubmitValidateFailed,
    onFormSubmitValidateSuccess,
    onFormValidateFailed,
    onFormValidateSuccess,
    onFieldInit,
    onFieldMount,

    Form,
    Field,
    onFieldUnmount,
    onFieldReact,
    onFieldChange,
  } from "@formily/core";



export class FromEffectHooks {
    form: any;
   
    constructor() {
    }
    init() {
        const form  = createForm({
            initialValues: {
                say: "hello",
              },
            
            effects() {
                 onFormInit(()=> {
                    console.log(form, "初始化");
                 }); 
                 onFormMount(()=>{
                    console.log(form, "表单已挂载");
                 });
                  onFormReact((form) => {
                    console.log(form, "数据响应跟踪");
                  });
                  onFormValuesChange((form) => {
                    console.log("表单值变化", form);
                  });
                  onFormInitialValuesChange((form) => {
                    console.log("监听默认值变化的钩子", form);
                  });
                  onFormInputChange((form) => {
                    console.log("监听字段输入的副作用钩子", form);
                  });
                  onFormInputChange((form) => {
                    console.log("监听字段输入的副作用钩子", form);
                  });
                  onFormSubmit((form) => {
                    console.log("用于监听表单提交的副作用钩子", form);
                  });
                  onFormSubmitStart((form) => {
                    console.log("监听表单提交开始的副作用钩子", form);
                  });
                  onFormSubmitEnd((form) => {
                    console.log("监听表单提交结束的副作用钩子", form);
                  });
                  onFormSubmitFailed((form) => {
                    console.log("监听表单提交失败的副作用钩子", form);
                  });
                  onFormSubmitSuccess((form) => {
                    console.log("监听表单提交成功的副作用钩子", form);
                  });
                  onFormSubmitValidateStart((form) => {
                    console.log("监听表单提交过程的字段校验开始的副作用钩子", form);
                  });
                  onFormSubmitValidateEnd((form) => {
                    console.log("监听表单提交过程的字段校验结束的副作用钩子", form);
                  });
                  onFormSubmitValidateFailed((form) => {
                    console.log("监听表单提交过程的字段校验失败的副作用钩子", form);
                  });
                  onFormSubmitValidateSuccess((form) => {
                    console.log("监听表单提交过程的字段校验成功的副作用钩子", form);
                  });
                  onFormValidateFailed((form) => {
                    console.log("监听表单校验失败的副作用钩子", form);
                  });
                  onFormValidateSuccess((form) => {
                    console.log("监听表单校验成功的副作用钩子", form);
                  });
            }
        })
       
        return form
    }
   
}

export class FieldEffectHooks {
    field: any;
   
    constructor() {
    }
    init() {
        const field  = createForm({
            initialValues: {
                say: "hello",
              },
            
            effects() {
                onFieldInit('target', ()=> {
                    console.log("初始化");
                 }); 
                 onFieldMount('target', (field: Field, form: Form)=>{
                    console.log("监听某个字段已挂载的副作用钩子");
                 });
                 onFieldUnmount('target',(field: Field, form: Form) => {
                    console.log("监听某个字段已卸载的副作用钩");
                });
                onFieldReact('target',(field: Field, form: Form) => {
                    console.log("字段响应式逻辑的副作用钩子");
                });
                onFieldChange('target',['component'], (field: Field, form: Form) => {
                    console.log("传入具体要监听的的属性集合，也可以不传，默认是监听 value 变化");
                }); 
            }
        })
       
        return field
    }
   
}

class FormHooks {
    
}