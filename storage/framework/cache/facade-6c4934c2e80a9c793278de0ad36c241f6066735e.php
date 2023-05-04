<?php

namespace Facades\Statamic\Preferences;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Statamic\Preferences\CorePreferences
 */
class CorePreferences extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'Statamic\Preferences\CorePreferences';
    }
}
