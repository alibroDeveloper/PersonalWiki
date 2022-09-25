//book.js
module.exports={

    "title" : "NoteBook",
    "author" : "John Wu",
    "description" : "记录Gitbook的配置和一些插件的使用",

    "label": {
        "en": "Edit This Page",
        "zh-cn": "编辑本页"
    },

    // 在左侧导航栏添加链接信息
    "links" : {
        "sidebar" : {
            "Home" : "#",

        }
    },
        // Plugins list, can contain "-name" for removing default plugins
        "plugins": [
            "sharing-plus",
            "-lunr", 
            "-search", 
            "-sharing",
            "search-pro",
            "chapter-fold",
            "splitter",
            "back-to-top-button",
            "theme-fexa",
            "code",
            "tbfed-pagefooter",
            "editlink",
            "todo",
            "codetabs",
        ],
        "variables": {
            "themeFexa":{
                "nav":[
                    {
                        "url":"#",
                        "target":"_self",
                        "name": "学习笔记"
                    }
                ]
            },
        },

        // Global configuration for plugins
        "pluginsConfig": {
            "theme-fexa":{
                "search-placeholder":"输入关键字搜索", //搜索框提示信息
                "logo":"asset/delta-logo.png", //logo地址
                "favicon": "./favicon.ico" //ico地址
            },
            "tbfed-pagefooter": {
                "copyright":"哈哈哈哈哈 ",
                "modify_label": "该文件最后修改时间：",
                "modify_format": "YYYY-MM-DD HH:mm:ss"
                // "modify_copy": "Powered by John"
            },
            "sharing": {
                "douban": true,
                "facebook": true,
                "google": true,
                "twitter": true,
                "whatsapp": true,
                "all": [
                    "hatenaBookmark",
                    "instapaper",
                    "line",
                    "linkedin",
                    "messenger",
                    "pocket",
                    "qq",
                    "qzone",
                    "stumbleupon",
                    "viber",
                    "vk",
                    "weibo"
                ]
            },
            "editlink": {
                "base": "https://github.com/alibroDeveloper/PersonalWiki.git",
                "label": "Edit This Page",
                "multilingual": false
              }
    
        },
}