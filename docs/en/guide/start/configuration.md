# Configuration

Laravel Generator's flexible configuration allows you to configure it according to your needs. Let's take a look at how you can configure it.

## Configuration File

After installing Laravel Generator, you can obtain the configuration file by running the following command, which will be placed in `config/laravel-generator.php`:

```sh
php artisan vendor:publish --tag=laravel-generator
```

`laravel-generator.php` file description:

```php
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
    // Custom parameters
    'custom_keys'=>[
        'author'=>env('GENERATOR_AUTHOR','system')
    ]
];
```

Configure `GENERATOR_AUTHOR=Your Name` in the `.env` file to configure the creator.