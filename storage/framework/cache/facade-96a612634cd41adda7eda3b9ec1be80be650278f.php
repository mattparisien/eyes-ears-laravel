<?php

namespace Facades\Statamic\Tokens;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Statamic\Tokens\Generator
 */
class Generator extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'Statamic\Tokens\Generator';
    }
}
