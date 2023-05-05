<?php

namespace Facades\Statamic\Structures;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Statamic\Structures\BranchIds
 */
class BranchIds extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'Statamic\Structures\BranchIds';
    }
}
