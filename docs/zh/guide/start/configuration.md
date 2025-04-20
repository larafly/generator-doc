# 配置

Laravel Generator灵活的配置允许您根据自己的需要进行相应的配置，下面来看看您可以如何进行配置


## 配置文件

安装完Laravel Generator后，您可以通过运行如下命令来获取配置文件,将会放到`config/generator.php`
```sh
php artisan vendor:publish --tag=laravel-generator
```

`generator.php` 文件说明

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
    //设置标签
    'tags'=>[
        [
            'name'=>'Controller',
            'path'=>'app/Http/Controllers/Admin/',
            'file'=>'DummyClassController.php',
            'type'=>'primary',
        ],
        [
            'name'=>'Test',
            'path'=>'tests/Unit',
            'file'=>'DummyClassTest.php',
            'type'=>'danger',
        ],
        [
            'name'=>'Vue',
            'path'=>'resources/views/admin/DummySnakeClass/',
            'file'=>'index.vue',
            'type'=>'warning',
        ],
        [
            'name'=>'Request',
            'path'=>'app/Http/Requests/',
            'file'=>'DummyClassRequest.php',
            'type'=>'success',
        ]
    ],
    //自定义参数
    'customDummys'=>[
        'DummyAuthor'=>env('GENERATOR_AUTHOR','system')
    ]
];
```

在`.env`中配置`GENERATOR_AUTHOR=你的名字`，来进行创建人的配置