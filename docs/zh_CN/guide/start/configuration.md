# 配置

Laravel Generator灵活的配置允许您根据自己的需要进行相应的配置，下面来看看您可以如何进行配置


## 配置文件

安装完Laravel Generator后，您可以通过运行如下命令来获取配置文件,将会放到`config/laravel-generator.php`
```sh
php artisan vendor:publish --tag=laravel-generator
```

`laravel-generator.php` 文件说明

```sh
<?php

return [
     // 项目的名称
    'name' => 'Laravel Generator',
    // 访问地址
    'route'=>'laravel-generator',
    // 定义规则
    'rules'=>[
        'string',
        'email',
        'file',
        'numeric',
        'array',
        'alpha',
        'alpha_dash',
        'alpha_num',
        'date',
        'boolean',
        'distinct',
        'phone',
        'custom'
    ],
    //自定义参数
     'custom_keys'=>[
        'author'=>env('GENERATOR_AUTHOR','system')
    ]
];
```

在`.env`中配置`GENERATOR_AUTHOR=你的名字`，来进行创建人的配置