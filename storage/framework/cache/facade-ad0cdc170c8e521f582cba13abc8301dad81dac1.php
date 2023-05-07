<?php

namespace Facades\Statamic\Licensing;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Statamic\Licensing\LicenseManager
 */
class LicenseManager extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'Statamic\Licensing\LicenseManager';
    }
}
