<?php
declare(strict_types=1);

namespace ScriptFUSION\Steam250\SiteGenerator\Generate;

use ScriptFUSION\Steam250\SiteGenerator\Toplist\ToplistFactory;

final class SiteGeneratorFactory
{
    public function create(string $dbPath, string $extension, bool $minify): SiteGenerator
    {
        $generator = (new PageGeneratorFactory)->create($dbPath, $extension);
        $generator->setMinify($minify);

        return new SiteGenerator($generator, (new ToplistFactory($generator->getDatabase()))->create());
    }
}