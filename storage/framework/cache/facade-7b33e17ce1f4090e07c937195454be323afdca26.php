<?php

namespace Facades\Statamic\Assets;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Statamic\Assets\ExtractInfo
 */
class ExtractInfo extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'Statamic\Assets\ExtractInfo';
    }
}
