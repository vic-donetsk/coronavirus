<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class CurrencyServiceProvider extends ServiceProvider {

    public function register() {
        $this->app->bind('currency', 'App\Services\CurrencyService');
    }

}
