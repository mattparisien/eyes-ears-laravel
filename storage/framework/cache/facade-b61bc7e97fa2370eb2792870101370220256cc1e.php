<?php

namespace Facades\Statamic\CP\Utilities;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Statamic\CP\Utilities\CoreUtilities
 */
class CoreUtilities extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'Statamic\CP\Utilities\CoreUtilities';
    }
}
