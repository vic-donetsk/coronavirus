<?php

namespace App\Http\Controllers;

use App\Http\Requests\TestRequest;
use App\Services\CurrencyService;
use Carbon\Carbon;
use Currency;

class CurrencyController extends Controller
{

    public function index()
    {
        return response()->json(Currency::parseUrl());
    }

    public function testRequest(TestRequest $request) {


        return response()->json($request->all());
    }

    public function testSklad($order)
    {
        if ($order = 666) {
            info('updating order');
            info(Carbon::now());
        } else {
            info('creating order');
            info(Carbon::now());
        }
    }


}
