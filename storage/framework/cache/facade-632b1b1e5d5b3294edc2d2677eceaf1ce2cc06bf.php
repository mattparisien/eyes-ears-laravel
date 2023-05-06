<?php

namespace Facades\Statamic\Fieldtypes;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Statamic\Fieldtypes\RowId
 */
class RowId extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'Statamic\Fieldtypes\RowId';
    }
}
