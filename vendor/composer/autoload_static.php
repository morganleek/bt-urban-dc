<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit099d8d4842ac5b92785df5fc5d5c57df
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WPackio\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WPackio\\' => 
        array (
            0 => __DIR__ . '/..' . '/wpackio/enqueue/inc',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit099d8d4842ac5b92785df5fc5d5c57df::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit099d8d4842ac5b92785df5fc5d5c57df::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit099d8d4842ac5b92785df5fc5d5c57df::$classMap;

        }, null, ClassLoader::class);
    }
}