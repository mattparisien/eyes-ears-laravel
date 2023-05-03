<?php

namespace Facades\Statamic\Routing;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Statamic\Routing\ResolveRedirect
 */
class ResolveRedirect extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'Statamic\Routing\ResolveRedirect';
    }
}
