"use strict";
/*
    ts中的接口-接口为一种规范的定义 interface
*/
//  1.属性接口  对 json 的约束
function printLabel(labelInfo) {
    console.log('printLabel');
}
var labelJson = {
    label: 'aa'
};
printLabel(labelJson);
function printName(name) {
    //必须传入一个对象，对象中必须有 firstName secondName
    console.log(name.firstName + name.secondName);
}
function printInfo(name) {
    //必须传入一个对象，对象中必须有 firstName secondName
    console.log(name.firstName + name.secondName + name.age);
}
var obj = {
    age: 20,
    firstName: 'tao',
    secondName: 'li'
};
printName(obj);
printInfo(obj);
function getName(name) {
    console.log();
}
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (config.dataType == 'json') {
                console.log('success', JSON.parse(xhr.responseText));
            }
            else {
                console.log('success', xhr.responseText);
            }
        }
    };
}
ajax({
    type: 'get',
    url: 'http://www.baidu.com',
    data: '',
    dataType: 'json'
});
//  2.函数类型接口
//  3、