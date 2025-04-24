# Configuration

Laravel Generator's flexible configuration allows you to configure it according to your needs. Let's take a look at how you can configure it.

## Configuration File

After installing Laravel Generator, you can obtain the configuration file by running the following command, which will be placed in `config/generator.php`:

```sh
php artisan vendor:publish --tag=laravel-generator
```

`generator.php` file description:

```sh
<?php

return [
    // Project name
    'name' => 'Laravel Generator',
    // Access address
    'route' => 'laravel-generator',
    // Define rules
    'rules' => [
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
    // Set tags
    'tags' => [
        [
            'name' => 'Controller',
            'path' => 'app/Http/Controllers/Admin/',
            'file' => 'DummyClassController.php',
            'type' => 'primary',
        ],
        [
            'name' => 'Test',
            'path' => 'tests/Unit',
            'file' => 'DummyClassTest.php',
            'type' => 'danger',
        ],
        [
            'name' => 'Vue',
            'path' => 'resources/views/admin/DummySnakeClass/',
            'file' => 'index.vue',
            'type' => 'warning',
        ],
        [
            'name' => 'Request',
            'path' => 'app/Http/Requests/',
            'file' => 'DummyClassRequest.php',
            'type' => 'success',
        ]
    ],
    // Custom parameters
    'customDummys' => [
        'DummyAuthor' => env('GENERATOR_AUTHOR', 'system')
    ]
];
```

Configure `GENERATOR_AUTHOR=Your Name` in the `.env` file to configure the creator.