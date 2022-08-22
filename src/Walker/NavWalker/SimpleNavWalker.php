<?php

namespace SpaceName\NavWalker\NavWalker;

class SimpleNavWalker extends \Walker
{
    public function walk($elements, $max_depth, ...$args)
    {
        $list = [];

        foreach ($elements as $item) {
            $list[] = "<a class='nav-item w-nav-link " . implode(' ', $item->classes) . "' href='$item->url'>$item->title</a>";
        }

        return join("\n", $list);
    }
}