<?php

namespace Facades\Statamic\CP;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Statamic\CP\LivePreview
 */
class LivePreview extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'Statamic\CP\LivePreview';
    }
}
