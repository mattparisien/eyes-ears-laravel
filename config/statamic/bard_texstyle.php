<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Styles
    |--------------------------------------------------------------------------
    |
    | List of styles.
    |
    */

    'styles' => [

        'title' => [
            'type' => 'heading',
            'level' => 4,
            'name' => 'Title',
            'ident' => 'T',
            'icon' => null,
            'cp_css' => 'text-decoration: underline; text-underline-offset: 0.1em; text-decoration-color: #c5ccd4',
            'cp_badge' => false,
        ],

        'lead' => [
            'type' => 'paragraph',
            'name' => 'Lead',
            'ident' => 'L',
            'icon' => null,
            'class' => 'text-xl max-w-prose mt-5',
            'cp_badge' => false,
        ],

        'brand' => [
            'type' => 'span',
            'name' => 'Brand Text',
            'ident' => 'B',
            'icon' => null,
            'class' => 'brand-text',
            'cp_css' => 'color: #ff269e; font-weight: 700',
            'cp_badge' => false,
        ],

        'action' => [
            'type' => 'link',
            'name' => 'Action',
            'ident' => 'A',
            'icon' => null,
            'class' => 'action hover-underline',
            'cp_css' => 'background: #737f8d; color: white; padding: 0.2em 0.5em; border-radius: 4px',
            'cp_badge' => false,
        ],

        'bulletList' => [
            'type' => 'bulletList',
            'name' => 'Bullet List',
            'ident' => '■',
            'icon' => null,
            'cp_badge' => false,
        ],

        'romanlist' => [
            'type' => 'orderedList',
            'name' => 'Roman List',
            'ident' => '•',
            'icon' => null,
            'class' => 'roman-list',
            'cp_badge' => false,
        ],

        'checklist' => [
            'type' => 'bulletList',
            'name' => 'Check List',
            'ident' => '-',
            'icon' => null,
            'class' => 'check-list',
            'cp_badge' => false,
        ],

        'twocolumns' => [
            'type' => 'div',
            'name' => 'Two Columns',
            'ident' => '❙ ❙',
            'icon' => null,
            'class' => 'two-columns',
            'cp_css' => 'column-count: 2; column-gap: 16px',
            'cp_badge' => true,
        ],

        'threecolumns' => [
            'type' => 'div',
            'name' => 'Three Columns',
            'ident' => '❙❙❙',
            'icon' => null,
            'class' => 'three-columns',
            'cp_css' => 'column-count: 3; column-gap: 16px',
            'cp_badge' => true,
        ],

        'inlineimage' => [
            'type' => 'div',
            'name' => 'Inline Image',
            'ident' => '❙❙❙',
            'icon' => null,
            'class' => 'three-columns',
            'cp_css' => 'column-count: 3; column-gap: 16px',
            'cp_badge' => true,
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Default Classes
    |--------------------------------------------------------------------------
    |
    | Default classes that will be applied to elements with no style set. The
    | standard set will be used if no set is selected in the field config.
    |
    */

    'default_classes' => [
        'standard' => [
            'heading' => [
                1 => 'h1',
                2 => 'h2',
                3 => 'h3',
                4 => 'h4',
                5 => 'h5',
                6 => 'h6',
            ],
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Attributes (pro only)
    |--------------------------------------------------------------------------
    |
    | The attributes that can be edited through the attributes panel.
    |
    */

    'attributes' => [

        'heading' => [
            'id' => [
                'type' => 'text',
                'display' => 'ID',
                'default' => null,
                'rendered' => true,
            ],
        ],

        'orderedList' => [
            'start' => [
                'type' => 'text',
                'display' => 'Start',
                'default' => null,
                'rendered' => true,
            ],
            'reversed' => [
                'type' => 'toggle',
                'display' => 'Reversed',
                'default' => null,
                'rendered' => true,
            ],
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Store
    |--------------------------------------------------------------------------
    |
    | By default the class names are saved to your content. If you would prefer
    | to save the style keys instead you can change this option to "key".
    |
    */

    'store' => 'class',

];
