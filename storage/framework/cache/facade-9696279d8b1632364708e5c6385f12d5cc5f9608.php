<?php

namespace Facades\Statamic\Imaging;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Statamic\Imaging\ImageValidator
 */
class ImageValidator extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'Statamic\Imaging\ImageValidator';
    }
}
