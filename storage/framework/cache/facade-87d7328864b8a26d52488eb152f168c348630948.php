<?php

namespace Facades\Statamic\Imaging;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Statamic\Imaging\Attributes
 */
class Attributes extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'Statamic\Imaging\Attributes';
    }
}
