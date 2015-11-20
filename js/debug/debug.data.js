/**
 * Created by liang on 2015/11/18.
 */
var menuList = [
    {
        "menuid" : "001",
        "menuname" : "菜单管理",
        "icon" : "icon-large-picture",
        "children" : [
            {
                "menuid" : "001001",
                "menuname" : "树表Demo",
                "icon" : "icon-large-picture",
                "url" : "pages/menu/panel_menu.html"
            }, {
                "menuid" : "001002",
                "menuname" : "测试数据2",
                "icon" : "icon-large-picture",
                "url" : "http://www.baidu.com"
            }, {
                "menuid" : "001003",
                "menuname" : "测试数据3",
                "icon" : "icon-large-picture",
                "url" : "http://www.baidu.com"
            }
        ]
    }, {
        "menuid" : "002",
        "menuname" : "其他设置",
        "icon" : "icon-large-picture",
        "children" : [
            {
                "menuid" : "001001",
                "menuname" : "设置1",
                "icon" : "icon-large-picture",
                "url" : "http://www.baidu.com"
            }, {
                "menuid" : "001002",
                "menuname" : "设置2",
                "icon" : "icon-large-picture",
                "url" : "http://www.baidu.com"
            }, {
                "menuid" : "001003",
                "menuname" : "设置3",
                "icon" : "icon-large-picture",
                "url" : "http://www.baidu.com"
            }
        ]
    }
];
var toolbar = [{
    text:'新增',
    iconCls:'icon-add',
    handler:function(){alert('debug')}
},{
    text:'修改',
    iconCls:'icon-edit',
    handler:function(){alert('debug')}
},'-',{
    text:'保存',
    iconCls:'icon-save',
    handler:function(){alert('debug')}
}];